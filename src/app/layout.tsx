import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Menu from "./components/Menu";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "brandon shearin",
  description: "getting started on a beautiful website",
  openGraph: {
    title: "brandon shearin",
    description: "a wonderful place to spend time",
    url: "https://brandonshearin.com",
    siteName: "brandon shearin",
    images: [
      {
        url: "https://oennoqfwwu9del0c.public.blob.vercel-storage.com/IMG_2051-tD14M6WAEzZsJIu44JfH3LJB3I2bCO.jpeg",
        width: 600,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
            justifyContent: "end",
            alignItems: "center",
            zIndex: "10000",
          }}
        >
          {/* <h1
            className={mediumTongari.className}
            style={{ fontSize: "6vw", color: "#fffff5" }}
          >
            Brandón
          </h1> */}
          <Menu></Menu>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
