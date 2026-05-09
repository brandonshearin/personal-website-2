import type { CSSProperties } from "react";
import posts, { ACCENT_COLORS } from "@/app/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { loadImagesForPost } from "@/utils/utils";

const INK = "#131313";
const OCHRE = "#E7B53A";

const monoStack =
  '"PachinkoLimited-RegularMono", ui-monospace, SFMono-Regular, monospace';
const titleStack =
  '"CalisteDisplayLimited-Bold", "Cormorant Garamond", Georgia, serif';
const bodyStack =
  '"CalisteTextLimited-Regular", "Cormorant Garamond", Georgia, serif';

type MarkdownNode = {
  type?: string;
  value?: string;
  children?: MarkdownNode[];
  data?: {
    hProperties?: Record<string, string>;
  };
};

async function getMarkdownContent(dir: string) {
  const filePath = path.join(process.cwd(), "public", dir, `${dir}.md`);
  return fs.readFile(filePath, "utf8");
}

function remarkHeadingIds() {
  return (tree: MarkdownNode) => {
    function visit(node: MarkdownNode) {
      if (node.type === "heading" && node.children?.length) {
        const lastChild = node.children[node.children.length - 1];
        const idMatch = lastChild.value?.match(/\s*\{#([^}]+)\}\s*$/);

        if (idMatch) {
          lastChild.value = lastChild.value?.replace(/\s*\{#[^}]+\}\s*$/, "");
          node.data = {
            ...node.data,
            hProperties: {
              ...node.data?.hProperties,
              id: idMatch[1],
            },
          };
        }
      }

      node.children?.forEach(visit);
    }

    visit(tree);
  };
}

async function renderMarkdown(markdownContent: string) {
  const processed = await remark()
    .use(remarkHeadingIds)
    .use(remarkHtml, { sanitize: { clobberPrefix: "" } })
    .process(markdownContent);

  return processed.toString();
}

export default async function Post({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts[params.slug];
  if (!post) notFound();

  const accent = post.accent
    ? ACCENT_COLORS[post.accent]
    : ACCENT_COLORS.vermillion;

  const markdownContent = await getMarkdownContent(params.slug);
  const body = await renderMarkdown(markdownContent);
  const images = await loadImagesForPost(params.slug);

  const slugNum = Number(params.slug);
  const prevPost = posts[String(slugNum - 1)];
  const nextPost = posts[String(slugNum + 1)];
  const num = params.slug.padStart(2, "0");

  return (
    <article
      style={
        {
          position: "relative",
          maxWidth: "780px",
          margin: "0 auto",
          padding: "16px 24px 96px",
          zIndex: 0,
          "--accent": accent,
        } as CSSProperties
      }
    >
      <p
        style={{
          fontFamily: monoStack,
          fontSize: "11px",
          color: OCHRE,
          letterSpacing: "0.06em",
          margin: "0 0 4px 0",
        }}
      >
        no. {num}
      </p>

      <h1
        style={{
          fontFamily: titleStack,
          fontWeight: 700,
          fontSize: "clamp(40px, 6.5vw, 64px)",
          lineHeight: 1.05,
          letterSpacing: "-0.01em",
          color: accent,
          margin: "4px 0 8px 0",
        }}
      >
        {post.title}
      </h1>

      <p
        style={{
          fontFamily: monoStack,
          fontSize: "11px",
          color: "rgba(19, 19, 19, 0.55)",
          letterSpacing: "0.05em",
          margin: 0,
        }}
      >
        {post.date}
      </p>

      <div
        aria-hidden
        style={{
          textAlign: "center",
          fontFamily: bodyStack,
          color: "rgba(19, 19, 19, 0.4)",
          letterSpacing: "0.5em",
          fontSize: "16px",
          margin: "32px 0",
        }}
      >
        *&nbsp;&nbsp;*&nbsp;&nbsp;*
      </div>

      <div
        className="post-markdown"
        style={{
          fontFamily: bodyStack,
          fontSize: "clamp(16px, 1.8vw, 18px)",
          lineHeight: 1.7,
          color: INK,
        }}
        dangerouslySetInnerHTML={{ __html: body }}
      />

      {images.length > 0 && (
        <>
          <p
            style={{
              fontFamily: monoStack,
              fontSize: "10px",
              color: "rgba(19, 19, 19, 0.55)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "56px 0 12px 0",
            }}
          >
            photographs
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "6px",
            }}
          >
            {images.map((img, idx) => (
              <div
                key={img}
                style={{
                  position: "relative",
                  aspectRatio: post.landscape ? "5/4" : "4/5",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={img}
                  alt={`${post.title} photograph ${idx + 1}`}
                  fill
                  sizes="(max-width: 780px) 33vw, 245px"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </>
      )}

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          padding: "24px 0 0 0",
          borderTop: "0.5px dashed rgba(19, 19, 19, 0.22)",
          marginTop: "56px",
          fontFamily: monoStack,
          fontSize: "11px",
          letterSpacing: "0.04em",
        }}
      >
        {prevPost ? (
          <Link
            href={`/posts/${prevPost.slug}`}
            className="post-nav-link"
            style={{
              color: INK,
              textDecoration: "none",
              flex: "1 1 0",
              textAlign: "left",
            }}
          >
            ← no. {prevPost.slug.padStart(2, "0")} {prevPost.title}
          </Link>
        ) : (
          <span style={{ flex: "1 1 0" }} />
        )}
        {nextPost ? (
          <Link
            href={`/posts/${nextPost.slug}`}
            className="post-nav-link"
            style={{
              color: INK,
              textDecoration: "none",
              flex: "1 1 0",
              textAlign: "right",
            }}
          >
            no. {nextPost.slug.padStart(2, "0")} {nextPost.title} →
          </Link>
        ) : (
          <span style={{ flex: "1 1 0" }} />
        )}
      </nav>

      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-100px",
          bottom: "-60px",
          width: "300px",
          height: "300px",
          background: accent,
          borderRadius: "50%",
          opacity: 0.08,
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
    </article>
  );
}
