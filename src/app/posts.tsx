import { StaticImageData } from "next/image";

export type PostType = {
  slug: string;
  title: string;
  date: string;
  landscape?: boolean;
};

const posts: Record<string, PostType> = {
  "1": {
    slug: "1",
    title: "the cost of things",
    date: "june 23, 2024",
  },
  "2": {
    slug: "2",
    title: "still thinking about the cost of things",
    date: "june 23, 2024",
    landscape: true,
  },
  "3": {
    slug: "3",
    title: "jazz",
    date: "june 26, 2024",
  },
  "4": {
    slug: "4",
    title: "cross country",
    date: "june 29, 2024",
    landscape: true,
  },
};

export default posts;
