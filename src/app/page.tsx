import localFont from "next/font/local";
import path from "path";
import fs from "fs";
import HeroImage from "./components/HeroImage";
import CutPaperShapes from "./components/CutPaperShapes";

const extraBoldTongari = localFont({
  src: "./fonts/TongariDisplayLimited-Extrabold.woff2",
  display: "swap",
});

function loadImages(dir: string): string[] {
  const imagesDir = path.join(process.cwd(), "public", "hero", dir);
  const imageFiles = fs.readdirSync(imagesDir);

  const supportedExtensions = [".jpg", ".jpeg", ".png", ".webp"];
  const images = imageFiles
    .filter((file) =>
      supportedExtensions.includes(path.extname(file).toLowerCase()),
    )
    .sort()
    .map((file) => `/hero/${dir}/${file}`);

  return images;
}

export default async function Home() {
  const images = await loadImages("fade-warm");

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        marginTop: "-100px",
        overflow: "hidden",
      }}
    >
      <HeroImage images={images} />

      <CutPaperShapes />

      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "12vh 6vw 10vh 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <div>
          <h1
            className={extraBoldTongari.className}
            style={{
              fontSize: "clamp(72px, 14vw, 200px)",
              lineHeight: 0.82,
              letterSpacing: "-0.04em",
              color: "#FFFFF5",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            BRAN
          </h1>
          <h1
            style={{
              fontFamily: '"Coline1-Bold", Georgia, serif',
              fontSize: "clamp(76px, 15vw, 220px)",
              lineHeight: 0.82,
              letterSpacing: "-0.03em",
              color: "#FFFFF5",
              margin: "-0.04em 0 0 0",
              textTransform: "uppercase",
            }}
          >
            DON
          </h1>
        </div>

        <div
          style={{
            fontFamily: '"Emilieshand-Regular", "Caveat", cursive',
            fontSize: "clamp(64px, 12vw, 170px)",
            lineHeight: 0.95,
            color: "#131313",
            transform: "rotate(-3deg)",
            transformOrigin: "left center",
            margin: "0.1em 0 0 12vw",
          }}
        >
          Shearin*
        </div>

        <div
          style={{
            fontFamily:
              '"PachinkoLimited-RegularMono", ui-monospace, SFMono-Regular, monospace',
            fontSize: "clamp(11px, 1.1vw, 14px)",
            color: "rgba(255, 255, 245, 0.78)",
            letterSpacing: "0.05em",
            marginTop: "1.6em",
            lineHeight: 1.6,
          }}
        >
          {/* <p style={{ margin: 0 }}>* galaxy troll</p> */}
          <p style={{ margin: 0 }}>* san francisco, ca</p>
        </div>
      </div>
    </div>
  );
}
