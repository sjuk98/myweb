import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 20,
          background: "linear-gradient(135deg, #c4d793 0%, #8da351 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#151614",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          fontWeight: "bold",
          borderRadius: "50%",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          lineHeight: 1,
          paddingBottom: "2px",
        }}
      >
        sj
      </div>
    ),
    {
      ...size,
    }
  );
}
