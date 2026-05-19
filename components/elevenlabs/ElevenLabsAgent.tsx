"use client";

import Script from "next/script";

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "agent-id": string;
        variant?: "tiny" | "compact" | "full";
        "default-expanded"?: "true" | "false";
        "always-expanded"?: "true" | "false";
        dismissible?: "true" | "false";
      };
    }
  }
}

export default function ElevenLabsAgent() {
  return (
    <>
      <elevenlabs-convai
        agent-id={process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || ""}
        // Smallest size — just the orb launcher. (Variants: tiny | compact | full)
        variant="tiny"
        // Start collapsed, allow expanding/collapsing after.
        default-expanded="false"
        always-expanded="false"
        dismissible="true"
      ></elevenlabs-convai>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  );
}
