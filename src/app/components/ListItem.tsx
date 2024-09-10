import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { PostType } from "../posts";

const davidRegular = localFont({
  src: "../fonts/david_03_regular.woff2",
  display: "swap",
});

const davidExtralight = localFont({
  src: "../fonts/david_01_extralight.woff2",
  display: "swap",
});

export default function ListItem({ post }: { post: PostType }) {
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
        <Image
          src={post.imgSrc[0]}
          alt={"post image"}
          style={{
            objectFit: "cover",
            aspectRatio: post.landscape ? "5/4" : "4/5",
            alignSelf: "center",
          }}
        ></Image>
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
