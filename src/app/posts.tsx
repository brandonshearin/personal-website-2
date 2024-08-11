import { StaticImageData } from "next/image";
import mom from "../../public/mom-grainy-4x5.jpeg";

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
