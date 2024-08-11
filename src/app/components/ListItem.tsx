import Image, { StaticImageData } from "next/image";
import mom from "../../../public/mom-grainy-4x5.jpeg";
import localFont from "next/font/local";
import Link from "next/link";

const davidRegular = localFont({
  src: "../fonts/david_03_regular.woff2",
  display: "swap",
});

const davidExtralight = localFont({
  src: "../fonts/david_01_extralight.woff2",
  display: "swap",
});

export const posts: Record<
  string,
  { title: string; date: string; imgSrc: StaticImageData; text: string }
> = {
  "1": {
    title: "Amsterdam / Copenhagen",
    date: "july '24",
    imgSrc: mom,
    text: `This is the first line.\nThis is the second line.\nAnd this is the third line.`,
  },
  "2": {
    title: "Amsterdam / Copenhagen",
    date: "july '24",
    imgSrc: mom,
    text: `This is the first line.\nThis is the second line.\nAnd this is the third line.`,
  },
};

export default function ListItem() {
  return (
    <Link href="/posts/1">
      <div className={davidRegular.className}>
        <Image
          src={posts[1].imgSrc}
          alt={"mom"}
          height={460}
          style={{
            objectFit: "cover",
          }}
        ></Image>
        <h3 style={{ fontSize: "1.675rem", lineHeight: "3rem" }}>
          {posts[1].title}
        </h3>
        <p className={davidExtralight.className} style={{ fontSize: "13px" }}>
          {posts[1].date}
        </p>
      </div>
    </Link>
  );
}
