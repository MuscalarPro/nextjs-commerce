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
      };
    }
  }
}

export default function ElevenLabsAgent() {
  return (
    <>
      <elevenlabs-convai
        agent-id={process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || ""}
      ></elevenlabs-convai>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  );
}
