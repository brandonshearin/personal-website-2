"use client";

import localFont from "next/font/local";
import Link from "next/link";
import { relative } from "path";
import { useState } from "react";

const mediumTongari = localFont({
  src: "../fonts/TongariDisplayLimited-Medium.woff2",
  display: "swap",
});

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowMenu(true)}
        style={{
          width: "30px",
          height: "30px",
          backgroundColor: "black",
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
                <Link href="/index" onClick={() => setShowMenu(false)}>
                  INDEX
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setShowMenu(false)}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/instagram" onClick={() => setShowMenu(false)}>
                  INSTAGRAM
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
