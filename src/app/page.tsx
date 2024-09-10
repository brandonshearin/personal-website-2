import { StaticImageData } from "next/image";
import localFont from "next/font/local";
import ListItem from "./components/ListItem";
import path from "path";
import fs from "fs";
import HeroImage from "./components/HeroImage";
import posts from "./posts";

const extraBoldTongari = localFont({
  src: "./fonts/TongariDisplayLimited-Extrabold.woff2",
  display: "swap",
});

const mediumTongari = localFont({
  src: "./fonts/TongariDisplayLimited-Medium.woff2",
  display: "swap",
});

const lightTongari = localFont({
  src: "./fonts/TongariDisplayLimited-Light.woff2",
  display: "swap",
});

const grotesqueFont = localFont({
  src: "./fonts/grotesque6-black.woff2",
});

const davidRegular = localFont({
  src: "./fonts/david_03_regular.woff2",
  display: "swap",
});

function loadImages(dir: string): StaticImageData[] {
  const imagesDir = path.join(process.cwd(), "public", "hero", dir);
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

// david blue rgb(69, 104, 232)
export default function Home() {
  const images = loadImages("fade-warm");

  return (
    <>
      <div
        style={{
          position: "relative",
          height: "110vh",
          width: "100vw",
          top: "-100px",
        }}
      >
        <HeroImage images={images} />

        <div
          style={{
            position: "relative",
            height: "110vh",
            width: "100vw",
            overflowX: "hidden",
          }}
        >
          <div
            className="z1 absolute top-1/2 text-7xl  pl-4"
            style={{ color: "#FA4639" }}
          >
            <h1 className={`${extraBoldTongari.className}`}>
              Bran<br></br>don
            </h1>
            <h1 className={`pl-12  ${extraBoldTongari.className}`}>
              She<br></br>arin*
            </h1>
            <div style={{}} className="text-xl pl-4">
              <p className={mediumTongari.className}>* Galaxy Troll</p>
              <p className={mediumTongari.className}>** San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "24px",
          maxWidth: "1200px",
          position: "relative",
          top: "-100px",
          margin: "0 auto",

          display: "flex",
          gap: "24px",
          justifyContent: "center",
          alignItems: "baseline",
          flexWrap: "wrap",
        }}
      >
        {Object.values(posts)
          .reverse()
          .map((row) => {
            return <ListItem key={row.title} post={row} />;
          })}
      </div>
    </>
  );
}
