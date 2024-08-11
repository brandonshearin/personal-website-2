import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { posts, PostType } from "../posts";

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
    <Link href={`/posts/${post.slug}`}>
      <div
        className={davidRegular.className}
        style={{ display: "flex", flexDirection: "column", gap: "4px" }}
      >
        <Image
          src={post.imgSrc}
          alt={"mom"}
          height={460}
          style={{
            objectFit: "cover",
          }}
        ></Image>
        <p className={davidExtralight.className} style={{ fontSize: "13px" }}>
          {post.date}
        </p>
        <h3 style={{ fontSize: "1.675rem", lineHeight: "1.675rem" }}>
          {post.title}
        </h3>
      </div>
    </Link>
  );
}
