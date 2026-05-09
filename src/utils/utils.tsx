import fs from "fs";
import path from "path";

export async function loadImagesForPost(dir: string): Promise<string[]> {
  const imagesDir = path.join(process.cwd(), "public", dir);
  const supportedExtensions = [".jpg", ".jpeg", ".png", ".webp"]; // Add more as needed

  const imageFiles = fs
    .readdirSync(imagesDir)
    .filter((file) =>
      supportedExtensions.includes(path.extname(file).toLowerCase())
    )
    .sort()
    .map((file) => `/${dir}/${file}`);

  return imageFiles;
}

// Returns the first sentence of a post's markdown file as a short excerpt
// for use in the index. Falls back to an empty string if the file is
// missing so a misconfigured post doesn't crash the page.
export function loadDekForPost(slug: string): string {
  try {
    const filePath = path.join(process.cwd(), "public", slug, `${slug}.md`);
    const content = fs.readFileSync(filePath, "utf8");
    const firstParagraph =
      content.split("\n").find((line) => line.trim().length > 0) ?? "";
    const sentenceMatch = firstParagraph.match(/^.+?[.!?](?=\s|$)/);
    return (
      sentenceMatch ? sentenceMatch[0] : firstParagraph.slice(0, 140)
    ).trim();
  } catch {
    return "";
  }
}
