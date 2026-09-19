import { ImageResponse } from "next/og";

export const alt = "HGH. — Hamza GHOURABI";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#ffffff",
      }}
    >
      <img
        src="https://www.hamzaghourabi.fr/hgh-og-preview-v1.jpg"
        alt=""
        width={1200}
        height={630}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>,
    size,
  );
}
