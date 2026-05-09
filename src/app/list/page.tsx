import type { CSSProperties } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import posts, { ACCENT_COLORS } from "../posts";
import { loadDekForPost } from "../../utils/utils";

const extraBoldTongari = localFont({
  src: "../fonts/TongariDisplayLimited-Extrabold.woff2",
  display: "swap",
});

const VERMILLION = "#DD2D1F";
const JADE = "#2D8F4E";
const INK = "#131313";

const monoStack =
  '"PachinkoLimited-RegularMono", ui-monospace, SFMono-Regular, monospace';
const titleStack =
  '"CalisteDisplayLimited-Bold", "Cormorant Garamond", Georgia, serif';
const dekStack =
  '"CalisteTextLimited-Lightitalic", "CalisteTextLimited-Regularitalic", Georgia, serif';

export default function Index() {
  const sortedPosts = Object.values(posts).reverse();

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "850px",
        margin: "0 auto",
        padding: "24px 24px 96px",
        minHeight: "calc(100vh - 100px)",
        zIndex: 0,
      }}
    >
      <h1
        className={extraBoldTongari.className}
        style={{
          fontSize: "clamp(64px, 11vw, 120px)",
          lineHeight: 0.85,
          letterSpacing: "-0.04em",
          color: VERMILLION,
          margin: 0,
          textTransform: "uppercase",
        }}
      >
        Index*
      </h1>
      <p
        style={{
          fontFamily: monoStack,
          fontSize: "12px",
          color: "rgba(19, 19, 19, 0.55)",
          letterSpacing: "0.05em",
          margin: "8px 0 48px 0",
        }}
      >
        * essays from san francisco, 2024–
      </p>

      <ol
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          borderTop: "0.5px solid rgba(19, 19, 19, 0.35)",
        }}
      >
        {sortedPosts.map((post) => {
          const dek = loadDekForPost(post.slug);
          const num = post.slug.padStart(2, "0");
          const accent = post.accent
            ? ACCENT_COLORS[post.accent]
            : ACCENT_COLORS.vermillion;
          return (
            <li
              key={post.slug}
              style={{ borderBottom: "0.5px dashed rgba(19, 19, 19, 0.22)" }}
            >
              <Link
                href={`/posts/${post.slug}`}
                className="essay-entry"
                style={
                  {
                    display: "grid",
                    gridTemplateColumns: "minmax(54px, auto) 1fr auto",
                    columnGap: "18px",
                    rowGap: "8px",
                    alignItems: "baseline",
                    padding: "20px 0",
                    textDecoration: "none",
                    color: "inherit",
                    "--accent": accent,
                  } as CSSProperties
                }
              >
                <span
                  className="essay-num"
                  style={{
                    fontFamily: monoStack,
                    fontSize: "12px",
                    color: accent,
                    letterSpacing: "0.06em",
                  }}
                >
                  no. {num}
                </span>
                <h2
                  className="essay-title"
                  style={{
                    fontFamily: titleStack,
                    fontWeight: 700,
                    fontSize: "clamp(22px, 3.4vw, 32px)",
                    lineHeight: 1.1,
                    color: INK,
                    margin: 0,
                  }}
                >
                  {post.title}
                </h2>
                <time
                  className="essay-date"
                  style={{
                    fontFamily: monoStack,
                    fontSize: "11px",
                    color: "rgba(19, 19, 19, 0.5)",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {post.date}
                </time>
                {dek && (
                  <p
                    className="essay-dek"
                    style={{
                      gridColumn: "2 / -1",
                      fontFamily: dekStack,
                      fontStyle: "italic",
                      fontSize: "clamp(14px, 1.7vw, 17px)",
                      color: "rgba(19, 19, 19, 0.7)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {dek}
                  </p>
                )}
              </Link>
            </li>
          );
        })}
      </ol>

      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-90px",
          bottom: "-60px",
          width: "320px",
          height: "320px",
          background: JADE,
          borderRadius: "50%",
          opacity: 0.12,
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
    </div>
  );
}
