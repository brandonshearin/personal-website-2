"use client";

import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const mediumTongari = localFont({
  src: "../fonts/TongariDisplayLimited-Medium.woff2",
  display: "swap",
});

const davidRegular = localFont({
  src: "../fonts/david_03_regular.woff2",
  display: "swap",
});

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const isOnHomePage = pathname === "/";

  return (
    <>
      <div
        className={mediumTongari.className}
        style={{
          fontSize: "24px",
          display: "flex",
          position: "sticky",
          height: "100px",
          top: "0",
          width: "100%",
          padding: "24px",
          justifyContent: isOnHomePage ? "end" : "space-between",
          alignItems: "center",
          zIndex: "10000",
          borderLeft: isOnHomePage ? undefined : "16px solid rgb(69, 104, 232)",
          borderRight: isOnHomePage
            ? undefined
            : "16px solid rgb(69, 104, 232)",
        }}
      >
        {isOnHomePage ? undefined : <Link href="/">home</Link>}
        <a>
          <div
            onClick={() => setShowMenu(true)}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: pathname === "/" ? "black" : "black",
              borderRadius: "50%",
            }}
          ></div>
        </a>

        {showMenu && (
          <div
            style={{
              zIndex: 10000,
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              // height: "100%",
            }}
            className="sm:h-full md:h-1/2"
          >
            <a>
              <div
                style={{
                  color: "#FA4639",
                  position: "absolute",
                  right: "24px",
                  fontSize: "11vw",
                }}
                onClick={() => setShowMenu(false)}
              >
                X
              </div>
            </a>

            <div
              style={{
                overflow: "auto",
                paddingLeft: "24px",
                paddingRight: "24px",
                backgroundColor: "#fffff5",
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
              className="text-center md:text-left justify-center md:justify-start"
            >
              <ul
                className={`${mediumTongari.className} text-[13vw] md:text-[7vw]`}
                style={{ color: "#FA4639" }}
              >
                <li>
                  <Link href="/" onClick={() => setShowMenu(false)}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="/list" onClick={() => setShowMenu(false)}>
                    INDEX
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={() => setShowMenu(false)}>
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/brandonshearin__/"
                    target="__blank"
                    onClick={() => setShowMenu(false)}
                  >
                    INSTAGRAM
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className={`${davidRegular.className} text-center md:text-left`}
              style={{
                position: "absolute",
                bottom: "32px",
                left: 0,
                right: 0,
                color: "#FA4639",
                paddingLeft: "24px",
                fontSize: "20px",
              }}
            >
              <p style={{}}>holla at me @</p>
              <p style={{ marginBottom: "8px" }}>bshearin15@gmail.com</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
