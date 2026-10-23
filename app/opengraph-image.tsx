import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          background: "#0b0b0b",
          padding: "72px",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#e8b020",
              color: "#0b0b0b",
              fontSize: 36,
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            F
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 600 }}>
            {site.name}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Aapka brand dikhega, tabhi toh bikega.
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.65)" }}>
            Content • Ads • Website • Branding — sab ek team se.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            color: "#e8b020",
          }}
        >
          Bilaspur • Ambikapur • Korba
        </div>
      </div>
    ),
    size,
  );
}
