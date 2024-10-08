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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={inter.className}
        style={{
          width: "100vw",
          maxWidth: "100vw",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        {/* NOTE: devtools doesn't show this as sticky on mobile but it is. untoggle mobile to sanity check if you ever forget */}

        <Menu></Menu>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
