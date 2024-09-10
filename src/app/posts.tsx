import { StaticImageData } from "next/image";
import mom from "../../public/mom-grainy-4x5.jpeg";

import a from "../../public/1/IMG_1556.jpeg";
import b from "../../public/1/IMG_1561.jpeg";
import c from "../../public/1/IMG_4856.jpeg";

import d from "../../public/2/d.jpeg";
import e from "../../public/2/e.jpeg";
import f from "../../public/2/f.jpeg";

import g from "../../public/3/g.jpeg";

import h from "../../public/4/h.jpeg";

export type PostType = {
  slug: string;
  title: string;
  date: string;
  imgSrc: StaticImageData[];
  landscape?: boolean;
};

const posts: Record<string, PostType> = {
  "1": {
    slug: "1",
    title: "the cost of things",
    date: "june 23, 2024",
    imgSrc: [a, b, c],
  },
  "2": {
    slug: "2",
    title: "still thinking about the cost of things",
    date: "june 23, 2024",
    imgSrc: [d, e, f],
    landscape: true,
  },
  "3": {
    slug: "3",
    title: "jazz",
    date: "june 26, 2024",
    imgSrc: [g],
  },
  "4": {
    slug: "4",
    title: "cross country",
    date: "june 29, 2024",
    imgSrc: [h],
    landscape: true,
  },
};

export default posts;
