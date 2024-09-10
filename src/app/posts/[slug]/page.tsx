import posts from "@/app/posts";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import fs from "fs";
import path from "path";
import { loadImagesForPost } from "@/utils/utils";

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

async function getMarkdownContent(dir: string) {
  const filePath = path.join(process.cwd(), "public", dir, `${dir}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  return fileContents;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const content = posts[params.slug];
  const postsCount = Object.keys(posts).length;

  const markdownContent = await getMarkdownContent(params.slug);
  const markdownContentAsHtml = (
    <>
      {markdownContent.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );

  const images = await loadImagesForPost(params.slug);

  const slug = Number(params.slug);

  const prevSlug = slug - 1;
  const nextSlug = slug + 1;

  return (
    <div style={{ width: "100%" }}>
      <div
        className="border-x-[16px] border-customBlue md:border-0"
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          marginBottom: "96px",
          maxWidth: "850px",
          margin: "0 auto",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          transition: "0.3s",
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
            {"<< older"}
          </Link>
          <Link
            href={`/posts/${nextSlug}`}
            style={{ visibility: slug < postsCount ? "visible" : "hidden" }}
          >
            {"more recent >>"}
          </Link>
        </div>
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
          {markdownContentAsHtml}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
            justifyContent: "center",
          }}
        >
          {images.length >= 0 &&
            images.slice(0).map((img, idx) => {
              return (
                <Image
                  key={idx}
                  src={img}
                  alt={content.title}
                  height={300}
                  style={{
                    objectFit: "cover",
                    aspectRatio: content.landscape ? "5/4" : "4/5",
                  }}
                ></Image>
              );
            })}
        </div>
      </div>
    </div>
  );
}
