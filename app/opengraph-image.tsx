import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

// Social preview card for LinkedIn, Devfolio, DoraHacks, X…
export const alt = `${profile.name} — Systems Engineer & Web3 Architect`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 0% 0%, #0b2a33 0%, #05070d 45%), #05070d",
          color: "#e6ebf5",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, color: "#10b981" }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: "#10b981" }} />
          {profile.status}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 30, color: "#a3adc2", marginTop: 16 }}>{profile.roles.join("  ·  ")}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 30 }}>
          <div style={{ display: "flex", gap: 14 }}>
            <span style={{ color: "#00f2fe" }}>Web2</span> discipline.
            <span style={{ color: "#a855f7" }}>Web3</span> trust.
          </div>
          <div style={{ display: "flex", width: 220, height: 4, background: "linear-gradient(90deg, #00f2fe, #a855f7)" }} />
        </div>
      </div>
    ),
    size,
  );
}
