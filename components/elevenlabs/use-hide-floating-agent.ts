"use client";

import { useEffect } from "react";

// Module-level counter so multiple overlay hooks coexist correctly —
// e.g. cart drawer + mobile menu open at once still keeps the widget
// hidden until both are closed.
let openOverlayCount = 0;

function syncBodyAttribute() {
  if (typeof document === "undefined") return;
  if (openOverlayCount > 0) {
    document.body.dataset.overlayOpen = "true";
  } else {
    delete document.body.dataset.overlayOpen;
  }
}

/**
 * Hides the floating ElevenLabs ConvAI widget while an overlay is open.
 *
 * Usage: call inside any modal/drawer/popup component, passing the
 * component's "is this open" state.
 *
 *   useHideFloatingAgent(isOpen);
 *
 * The widget is hidden whenever at least one overlay is currently open.
 */
export function useHideFloatingAgent(isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) return;
    openOverlayCount += 1;
    syncBodyAttribute();
    return () => {
      openOverlayCount = Math.max(0, openOverlayCount - 1);
      syncBodyAttribute();
    };
  }, [isOpen]);
}
