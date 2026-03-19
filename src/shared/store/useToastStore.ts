import { create } from "zustand";

export type ToastKind = "info" | "success" | "warning" | "danger";

export type ToastItem = {
  id: string;
  kind: ToastKind;
  title: string;
  message?: string;
  createdAt: number;
};

type ToastState = {
  toasts: ToastItem[];
  push: (t: Omit<ToastItem, "id" | "createdAt">) => void;
  dismiss: (id: string) => void;
};

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  push: (t) =>
    set((s) => {
      const id = crypto.randomUUID();
      const createdAt = Date.now();
      const next: ToastItem[] = [
        { ...t, id, createdAt },
        ...s.toasts
      ].slice(0, 4);
      return { toasts: next };
    }),
  dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) }))
}));

