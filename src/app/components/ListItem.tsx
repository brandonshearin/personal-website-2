import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { PostType } from "../posts";
import { loadImagesForPost } from "../../utils/utils";

const davidRegular = localFont({
  src: "../fonts/david_03_regular.woff2",
  display: "swap",
});

const davidExtralight = localFont({
  src: "../fonts/david_01_extralight.woff2",
  display: "swap",
});

export default async function ListItem({ post }: { post: PostType }) {
  const images = await loadImagesForPost(post.slug);
  const image = images[0];

  return (
    <Link href={`/posts/${post.slug}`} style={{ maxWidth: "400px" }}>
      <div
        className={`${davidRegular.className} 
        before-overlay
        `}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <div
          style={{
            position: "relative",
            aspectRatio: post.landscape ? "5/4" : "4/5",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {image && (
            <Image
              src={image}
              alt={"post image"}
              fill
              sizes="400px"
              style={{
                objectFit: "cover",
              }}
            />
          )}
        </div>
        <div
          style={{ position: "absolute", top: "40%", left: "12.5%" }}
          className="text-white"
        >
          <p style={{ fontSize: "24px" }}>{post.date}</p>
          <h3 style={{ fontSize: "36px", lineHeight: "2.275rem" }}>
            {post.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
