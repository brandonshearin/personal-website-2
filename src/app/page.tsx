import { StaticImageData } from "next/image";
import localFont from "next/font/local";
import ListItem from "./components/ListItem";
import path from "path";
import fs from "fs";
import HeroImage from "./components/HeroImage";

const mediumTongari = localFont({
  src: "./fonts/TongariDisplayLimited-Medium.woff2",
  display: "swap",
});

const lightTongari = localFont({
  src: "./fonts/TongariDisplayLimited-Light.woff2",
  display: "swap",
});

function loadImages(): StaticImageData[] {
  const imagesDir = path.join(process.cwd(), "public/hero/fade-warm");
  const imageFiles = fs.readdirSync(imagesDir);

  // Filter out non-image files if necessary, e.g., only `.jpg`, `.png`
  const supportedExtensions = [".jpg", ".jpeg", ".png", ".webp"]; // Add more as needed
  const images = imageFiles
    .filter((file) =>
      supportedExtensions.includes(path.extname(file).toLowerCase())
    )
    .map((file) => require(`../../public/hero/fade-warm/${file}`));

  return images;
}

export default function Home() {
  const images = loadImages();

  return (
    <>
      <div style={{ position: "relative", height: "95vh", top: "-100px" }}>
        <HeroImage images={images} />

        <div style={{ position: "relative", height: "95vh" }}>
          <div
            style={{
              top: "35%",
              position: "absolute",
              color: "#FA4639",
              fontSize: "5vw",
              letterSpacing: ".1rem",
              paddingLeft: "1rem",
            }}
          >
            <p className={lightTongari.className}>Person</p>
            <p className={lightTongari.className}>San Francisco CA</p>
            <p>/ 2024</p>
          </div>

          <p
            className={mediumTongari.className}
            style={{
              position: "absolute",
              fontSize: "18vw",
              color: "#FA4639",
              transform: "rotate(-18deg)",
              top: "45%",
              left: "-2%",
              textWrap: "nowrap",
            }}
          >
            the sofa king
          </p>
        </div>
      </div>

      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
          position: "relative",
          top: "-100px",
        }}
      >
        {[1, 2, 3].map((row) => {
          return <ListItem key={row} />;
        })}
      </div>
    </>
  );
}
