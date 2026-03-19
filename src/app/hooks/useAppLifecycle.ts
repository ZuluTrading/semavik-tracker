import { useEffect } from "react";
import { useTrackerStore } from "../../features/tracker/store/useTrackerStore";
import { syncFcmTokenIfPossible } from "../../services/fcm";

export function useAppLifecycle() {
  useEffect(() => {
    const refresh = () => {
      useTrackerStore.getState().refreshDerivedNow();
    };

    const onFocus = () => {
      refresh();
      syncFcmTokenIfPossible();
    };
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        refresh();
        syncFcmTokenIfPossible();
      }
    };

    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onVisibility);

    // Initial refresh in case page restored from bfcache
    refresh();
    syncFcmTokenIfPossible();

    return () => {
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
}

