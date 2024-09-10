import fs from "fs";
import path from "path";

export async function loadImagesForPost(dir: string) {
  const imagesDir = path.join(process.cwd(), "public", dir);
  const supportedExtensions = [".jpg", ".jpeg", ".png", ".webp"]; // Add more as needed

  const imageFiles = fs
    .readdirSync(imagesDir)
    .filter((file) =>
      supportedExtensions.includes(path.extname(file).toLowerCase())
    )
    .map((file) => require(`../../public/${dir}/${file}`));

  return imageFiles;
}
