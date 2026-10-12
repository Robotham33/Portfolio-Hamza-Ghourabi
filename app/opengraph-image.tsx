import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { pipelineSteps } from "@/content/home";

export const alt =
  "Hamza GHOURABI — Ingénieur intégration & validation logicielle";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const fontDir = join(process.cwd(), "node_modules/geist/dist/fonts");

const tagline = "Fiabiliser le logiciel, de l’exigence jusqu’à la validation.";

export default async function OpenGraphImage() {
  const [semibold, mono] = await Promise.all([
    readFile(join(fontDir, "geist-sans/Geist-SemiBold.ttf")),
    readFile(join(fontDir, "geist-mono/GeistMono-Regular.ttf")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background:
          "radial-gradient(circle at 88% 0%, rgba(23,105,194,0.55), transparent 45%), radial-gradient(circle at 0% 100%, rgba(255,106,26,0.16), transparent 40%), #070b10",
        color: "#ffffff",
        fontFamily: "Geist",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <span
            style={{
              fontSize: 52,
              fontWeight: 600,
              letterSpacing: "-0.07em",
              lineHeight: 1,
            }}
          >
            HGH
          </span>
          <span
            style={{
              width: 14,
              height: 14,
              marginLeft: 6,
              marginBottom: 4,
              background: "#5aa6ff",
            }}
          />
        </div>
        <span
          style={{
            fontFamily: "Geist Mono",
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          hamzaghourabi.fr
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontFamily: "Geist Mono",
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#5aa6ff",
          }}
        >
          Ingénieur intégration & validation logicielle
        </span>
        <span
          style={{
            marginTop: 18,
            fontSize: 92,
            fontWeight: 600,
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          Hamza Ghourabi
        </span>
        <span
          style={{
            marginTop: 28,
            fontFamily: "Geist Mono",
            fontSize: 29,
            lineHeight: 1.3,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          {tagline}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {pipelineSteps.map((step, index) => (
          <div
            key={step.label}
            style={{ display: "flex", alignItems: "center", gap: 12 }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 16px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.05)",
                fontFamily: "Geist Mono",
                fontSize: 20,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="m5 12.5 4.2 4.2L19 7"
                  stroke="#34d399"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {step.label}
            </span>
            {index < pipelineSteps.length - 1 ? (
              <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 22 }}>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
