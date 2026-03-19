type JsonValue = any;

const DB_NAME = "semavik_tracker_db";
const STORE_NAME = "kv";
const DB_VERSION = 1;

class IndexedDBKV {
  private dbPromise: Promise<IDBDatabase> | null = null;

  private open(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;
    this.dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    return this.dbPromise;
  }

  async get<T>(key: string): Promise<T | null> {
    if (typeof indexedDB === "undefined") return null;
    try {
      const db = await this.open();
      return await new Promise<T | null>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, "readonly");
        const store = tx.objectStore(STORE_NAME);
        const req = store.get(key);
        req.onsuccess = () => {
          resolve((req.result as T | undefined) ?? null);
        };
        req.onerror = () => reject(req.error);
      });
    } catch (e) {
      console.warn("IndexedDB get failed, falling back", e);
      return null;
    }
  }

  async set<T>(key: string, value: T): Promise<void> {
    if (typeof indexedDB === "undefined") return;
    try {
      const db = await this.open();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, "readwrite");
        const store = tx.objectStore(STORE_NAME);
        const req = store.put(value as unknown as JsonValue, key);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch (e) {
      console.warn("IndexedDB set failed, falling back", e);
    }
  }

  async del(key: string): Promise<void> {
    if (typeof indexedDB === "undefined") return;
    try {
      const db = await this.open();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, "readwrite");
        const store = tx.objectStore(STORE_NAME);
        const req = store.delete(key);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch (e) {
      console.warn("IndexedDB delete failed, falling back", e);
    }
  }
}

class HybridStorage {
  private idb = new IndexedDBKV();

  async getItem<T>(key: string): Promise<T | null> {
    const idbVal = await this.idb.get<T>(key);
    if (idbVal !== null) return idbVal;
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  async setItem<T>(key: string, value: T): Promise<void> {
    await this.idb.set<T>(key, value);
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore storage quota issues; IndexedDB is the main path
    }
  }

  async removeItem(key: string): Promise<void> {
    await this.idb.del(key);
    try {
      localStorage.removeItem(key);
    } catch {
      // ignore
    }
  }
}

export const storageService = new HybridStorage();

