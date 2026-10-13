import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt =
  "Hamza GHOURABI — Ingénieur intégration & validation logicielle";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const fontDir = join(process.cwd(), "node_modules/geist/dist/fonts");

// Le moteur d'image espace mal certains mots avec Geist : les espaces
// insécables donnent un espacement régulier (chaque ligne tient sans retour).
const nb = (text: string) => text.replace(/ /g, " ");

export default async function OpenGraphImage() {
  const [regular, medium, semibold, portrait] = await Promise.all([
    readFile(join(fontDir, "geist-sans/Geist-Regular.ttf")),
    readFile(join(fontDir, "geist-sans/Geist-Medium.ttf")),
    readFile(join(fontDir, "geist-sans/Geist-SemiBold.ttf")),
    readFile(join(process.cwd(), "content/portrait-og.jpg")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "64px 80px",
        background: "#f5f5f2",
        color: "#0b0f14",
        fontFamily: "Geist",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <span
            style={{
              fontSize: 40,
              fontWeight: 600,
              letterSpacing: "-0.07em",
              lineHeight: 1,
            }}
          >
            HGH
          </span>
          {/* Le carré bleu repose sur la ligne de base des lettres. */}
          <span
            style={{
              width: 8,
              height: 8,
              marginLeft: 3,
              marginBottom: 6,
              background: "#1769c2",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 76,
              fontWeight: 600,
              letterSpacing: "-0.045em",
              lineHeight: 1,
            }}
          >
            {nb("Hamza Ghourabi")}
          </span>
          <span
            style={{
              marginTop: 22,
              fontSize: 32,
              fontWeight: 500,
              color: "#4b5563",
            }}
          >
            {nb("Ingénieur intégration & validation logicielle")}
          </span>
          <span
            style={{
              marginTop: 34,
              width: 56,
              height: 4,
              background: "#1769c2",
            }}
          />
          <span style={{ marginTop: 26, fontSize: 24, color: "#4b5563" }}>
            {nb("Médical · Automobile · 7+ ans d’expérience")}
          </span>
        </div>

        <span style={{ fontSize: 22, color: "#6b7280" }}>hamzaghourabi.fr</span>
      </div>

      <img
        src={`data:image/jpeg;base64,${portrait.toString("base64")}`}
        alt=""
        width={360}
        height={386}
        style={{ borderRadius: 28, objectFit: "cover" }}
      />
    </div>,
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: medium, weight: 500, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
