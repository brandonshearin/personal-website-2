import { posts } from "@/app/posts";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const exposureFont = localFont({
  src: "../../fonts/Exposure.ttf",
  display: "swap",
});

const davidExtralight = localFont({
  src: "../../fonts/david_01_extralight.woff2",
  display: "swap",
});

export default function Post({ params }: { params: { slug: string } }) {
  const content = posts[params.slug];
  const postsCount = Object.keys(posts).length;

  const writing = content?.text?.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  const slug = Number(params.slug);

  const prevSlug = slug - 1;
  const nextSlug = slug + 1;

  return (
    <div
      style={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          href={`/posts/${prevSlug}`}
          style={{ visibility: slug > 1 ? "visible" : "hidden" }}
        >
          prev
        </Link>
        <Link
          href={`/posts/${nextSlug}`}
          style={{ visibility: slug < postsCount ? "visible" : "hidden" }}
        >
          next
        </Link>
      </div>

      <Image
        src={content.imgSrc}
        alt={"mom"}
        height={460}
        style={{
          objectFit: "cover",
        }}
      ></Image>
      <p
        className={`${exposureFont.className} hover-variable-settings`}
        style={{
          fontSize: "60px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "90%",
          letterSpacing: "-1.7px",
          color: "#2D46CA",
        }}
      >
        {content.title}
      </p>
      <p
        className={davidExtralight.className}
        style={{
          fontSize: "6vw",
          lineHeight: 1.2,
        }}
      >
        {writing}
      </p>
    </div>
  );
}
