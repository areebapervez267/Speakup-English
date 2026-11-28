import { ImageResponse } from "next/og";

export const alt = "SpeakUp English — CEFR English courses A1–C2";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#142B4A",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <span
            style={{
              width: 18,
              height: 18,
              borderRadius: 18,
              backgroundColor: "#35C2B4",
              marginRight: 16,
            }}
          />
          SpeakUp English
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: 980,
            }}
          >
            Learn English. Build confidence.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              color: "#B9D8D4",
            }}
          >
            Structured CEFR courses from A1 to C2
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #35506F",
            paddingTop: 28,
            fontSize: 24,
            color: "#DCE8F2",
          }}
        >
          <span>For Urdu &amp; Hindi speakers</span>
          <span style={{ color: "#55D6C7" }}>7 connected skills</span>
        </div>
      </div>
    ),
  );
}
