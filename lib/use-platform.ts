"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Vrai sur macOS / iOS, pour afficher ⌘ plutôt que Ctrl. */
export function useIsApplePlatform() {
  return useSyncExternalStore(
    subscribe,
    () => /Mac|iPhone|iPad/i.test(navigator.userAgent),
    () => false,
  );
}
