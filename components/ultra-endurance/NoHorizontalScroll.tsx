"use client";

import { useEffect } from "react";

/**
 * Clamps horizontal overflow at the document root for the lifetime of this
 * route.
 *
 * We set `overflow-x: hidden` on the <html> element specifically. The root
 * element is already the document's scroll container, so making it hidden on
 * the X axis (Y stays auto → vertical scroll keeps working) does NOT introduce
 * a new scroll container and does NOT change how `position: sticky` resolves —
 * the `sticky top-0` scroll-telling scenes still pin to the viewport.
 *
 * <body> stays `overflow-x: clip` (NOT hidden) on purpose: `hidden` would make
 * the body a scroll container, which would re-parent the sticky scenes to the
 * body and break them on iOS. `clip` contains paint without creating a
 * scrollport.
 *
 * Why `hidden` on <html> and not `clip`: `overflow-x: clip` is honored by
 * Chromium but NOT reliably by iOS Safari / WebKit, which still lets the page
 * pan sideways to reveal nested horizontal scrollers (the Doctors carousel,
 * the Transformation timeline) that overflow the viewport. `hidden` on the
 * root is the battle-tested, WebKit-reliable containment. Restored on unmount
 * so other pages are unaffected. Renders nothing.
 */
export function NoHorizontalScroll() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflowX;
    const prevBody = body.style.overflowX;
    html.style.overflowX = "hidden";
    body.style.overflowX = "clip";
    return () => {
      html.style.overflowX = prevHtml;
      body.style.overflowX = prevBody;
    };
  }, []);

  return null;
}
