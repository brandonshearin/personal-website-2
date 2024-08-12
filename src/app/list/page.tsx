import localFont from "next/font/local";
import posts from "../posts";
import Link from "next/link";

const exposureFont = localFont({
  src: "../fonts/Exposure.ttf",
  display: "swap",
});

export default function Index() {
  return (
    <div style={{ padding: "24px", marginBottom: "96px" }}>
      <h1
        className={`${exposureFont.className} hover-variable-settings`}
        style={{
          fontSize: "60px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "90%",
          letterSpacing: "-1.7px",
          color: "#2D46CA",
          paddingBottom: "24px",
        }}
      >
        Index
      </h1>
      <ul>
        {Object.values(posts)
          .reverse()
          .map((post) => {
            return (
              <Link href={`/posts/${post.slug}`} key={post.title}>
                <li style={{ marginTop: "8px", marginBottom: "8px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "24px",
                      gap: "8px",
                    }}
                  >
                    <p>
                      {post.slug}. {post.title}
                    </p>
                    {/* <p>{post.date}</p> */}
                  </div>
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}
