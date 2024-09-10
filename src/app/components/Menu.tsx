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
        <div
          onClick={() => setShowMenu(true)}
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: pathname === "/" ? "black" : "black",
            borderRadius: "50%",
          }}
        ></div>

        {showMenu && (
          <div
            style={{
              zIndex: 10000,
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
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

            <div
              style={{
                overflow: "auto",
                height: "100%",
                paddingLeft: "24px",
                paddingRight: "24px",
                textAlign: "center",
                backgroundColor: "#fffff5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ul
                className={mediumTongari.className}
                style={{ fontSize: "13vw", color: "#FA4639" }}
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
              className={davidRegular.className}
              style={{
                position: "absolute",
                bottom: "65px",
                left: 0,
                right: 0,
                color: "#FA4639",
                textAlign: "center",
                fontSize: "13px",
              }}
            >
              <p style={{ marginBottom: "8px" }}>
                holla at me @ bshearin15@gmail.com
              </p>

              <p>
                *site intended for mobile devices only. on desktop will look
                pitiful
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
