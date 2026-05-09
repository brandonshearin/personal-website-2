export type AccentColor = "vermillion" | "cobalt" | "ochre" | "jade";

export const ACCENT_COLORS: Record<AccentColor, string> = {
  vermillion: "#DD2D1F",
  cobalt: "#1B3F8C",
  ochre: "#E7B53A",
  jade: "#2D8F4E",
};

export type PostType = {
  slug: string;
  title: string;
  date: string;
  landscape?: boolean;
  accent?: AccentColor;
};

const posts: Record<string, PostType> = {
  "0": {
    slug: "0",
    title: "What Comes Before Tickets",
    date: "may 09, 2026",
    accent: "cobalt",
  },
  // "1": {
  //   slug: "1",
  //   title: "the cost of things",
  //   date: "june 23, 2024",
  //   accent: "vermillion",
  // },
  // "2": {
  //   slug: "2",
  //   title: "still thinking about the cost of things",
  //   date: "june 23, 2024",
  //   landscape: true,
  //   accent: "ochre",
  // },
  // "3": {
  //   slug: "3",
  //   title: "jazz",
  //   date: "june 26, 2024",
  //   accent: "cobalt",
  // },
  // "4": {
  //   slug: "4",
  //   title: "cross country",
  //   date: "june 29, 2024",
  //   landscape: true,
  //   accent: "jade",
  // },
};

export default posts;
