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
// LinkedIn affiche l'image deux fois plus petite et la recompresse : textes
// gros et contrastés, peu d'éléments.
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
              fontSize: 48,
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
              width: 10,
              height: 10,
              marginLeft: 3,
              marginBottom: 7,
              background: "#1769c2",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: "-0.045em",
              lineHeight: 1,
            }}
          >
            {nb("Hamza Ghourabi")}
          </span>
          <span
            style={{
              marginTop: 26,
              fontSize: 42,
              fontWeight: 500,
              lineHeight: 1.18,
              color: "#1f2937",
            }}
          >
            {nb("Ingénieur intégration")}
          </span>
          <span
            style={{
              fontSize: 42,
              fontWeight: 500,
              lineHeight: 1.18,
              color: "#1f2937",
            }}
          >
            {nb("& validation logicielle")}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ width: 48, height: 5, background: "#1769c2" }} />
          <span
            style={{
              marginLeft: 20,
              fontSize: 32,
              fontWeight: 500,
              color: "#374151",
            }}
          >
            {nb("Médical · Automobile")}
          </span>
        </div>
      </div>

      <img
        src={`data:image/jpeg;base64,${portrait.toString("base64")}`}
        alt=""
        width={340}
        height={365}
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
