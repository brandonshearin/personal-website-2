import posts from "@/app/posts";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const exposureFont = localFont({
  src: "../../fonts/Exposure.ttf",
  display: "swap",
});

const mediumTongari = localFont({
  src: "../../fonts/TongariDisplayLimited-Medium.woff2",
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
        marginBottom: "96px",
        borderLeft: "16px solid #2D46CA",
        borderRight: "16px solid #2D46CA",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "18px",
        }}
        className={mediumTongari.className}
      >
        <Link
          href={`/posts/${prevSlug}`}
          style={{ visibility: slug > 1 ? "visible" : "hidden" }}
        >
          older
        </Link>
        <Link
          href={`/posts/${nextSlug}`}
          style={{ visibility: slug < postsCount ? "visible" : "hidden" }}
        >
          more recent
        </Link>
      </div>

      <Image
        src={content.imgSrc[0]}
        alt={"mom"}
        height={460}
        style={{
          objectFit: "cover",
          aspectRatio: content.landscape ? "5/4" : "4/5",
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
          fontSize: "18px",
        }}
      >
        {content.date}
      </p>
      <p
        className={davidExtralight.className}
        style={{
          fontSize: "18px",
        }}
      >
        {writing}
      </p>

      {content.imgSrc.length > 1 &&
        content.imgSrc.slice(1).map((img, idx) => {
          return (
            <Image
              key={idx}
              src={img}
              alt={content.title}
              height={460}
              style={{
                objectFit: "cover",
                aspectRatio: content.landscape ? "5/4" : "4/5",
              }}
            ></Image>
          );
        })}
    </div>
  );
}
