import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wuz Good Family",
  description: "getting started on a beautiful website",
};

const mediumTongari = localFont({
  src: "./fonts/TongariDisplayLimited-Medium.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          width: "100vw",
          maxWidth: "100vw",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        {/* NOTE: devtools doesn't show this as sticky on mobile but it is. untoggle mobile to sanity check if you ever forget */}
        <div
          style={{
            display: "flex",
            position: "sticky",
            height: "100px",
            top: "0",
            width: "100%",
            padding: "24px",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: "10000",
          }}
        >
          <h1
            className={mediumTongari.className}
            style={{ fontSize: "6vw", color: "#fffff5" }}
          >
            Brandón
          </h1>
          <Menu></Menu>
        </div>
        {children}
      </body>
    </html>
  );
}
