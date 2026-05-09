"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ACCENT_COLORS } from "@/app/posts";

const INK = "#131313";
const PAPER = "#FFFFF5";
const PALE_JADE = "rgba(45, 143, 78, 0.18)";
const monoStack =
  '"PachinkoLimited-RegularMono", ui-monospace, SFMono-Regular, monospace';
const noteStack =
  '"CalisteTextLimited-Regularitalic", "CalisteTextLimited-Regular", Georgia, serif';

const menuItems = [
  {
    label: "home*",
    href: "/",
    background: ACCENT_COLORS.vermillion,
    color: PAPER,
    width: "320px",
    rotate: "-1.5deg",
    marginLeft: "0px",
  },
  {
    label: "index*",
    href: "/list",
    background: ACCENT_COLORS.cobalt,
    color: PAPER,
    width: "360px",
    rotate: "1deg",
    marginLeft: "78px",
  },
  {
    label: "about*",
    href: "/about",
    background: ACCENT_COLORS.ochre,
    color: INK,
    width: "360px",
    rotate: "-0.8deg",
    marginLeft: "35px",
  },
  {
    label: "instagram*",
    href: "https://www.instagram.com/brandon__shearin/",
    background: ACCENT_COLORS.jade,
    color: PAPER,
    width: "525px",
    rotate: "1.4deg",
    marginLeft: "110px",
    external: true,
  },
];

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const isOnHomePage = pathname === "/";
  const isOnPostPage = pathname?.startsWith("/posts/") ?? false;
  const backHref = isOnPostPage ? "/list" : "/";
  const backLabel = isOnPostPage ? "← index" : "← home";

  return (
    <>
      <div
        style={{
          display: "flex",
          position: "sticky",
          height: "100px",
          top: "0",
          width: "100%",
          padding: "24px",
          justifyContent: isOnHomePage ? "end" : "space-between",
          alignItems: "center",
          zIndex: "10000",
        }}
      >
        {isOnHomePage ? undefined : (
          <Link
            href={backHref}
            style={{
              fontFamily:
                '"PachinkoLimited-RegularMono", ui-monospace, SFMono-Regular, monospace',
              fontSize: "13px",
              color: "rgba(19, 19, 19, 0.7)",
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}
          >
            {backLabel}
          </Link>
        )}
        <button
          type="button"
          onClick={() => setShowMenu(true)}
          aria-label="Open menu"
          className="menu-trigger-sign"
          style={{
            fontFamily:
              '"PachinkoLimited-RegularMono", ui-monospace, SFMono-Regular, monospace',
          }}
        >
          menu*
        </button>

        {showMenu && (
          <div
            className="menu-overlay"
            style={{
              zIndex: 10000,
              position: "fixed",
              inset: 0,
              backgroundColor: PAPER,
              color: INK,
              overflowX: "hidden",
              overflowY: "auto",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <button
              type="button"
              className="menu-close-sign"
              onClick={() => setShowMenu(false)}
              aria-label="Close menu"
              style={{ fontFamily: monoStack }}
            >
              × close
            </button>

            <div
              aria-hidden
              className="menu-pale-cutout cut-shape-drift-5"
              style={{ background: PALE_JADE }}
            />

            <nav aria-label="Primary navigation" className="menu-paper-nav">
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                {menuItems.map((item) => (
                  <li
                    key={item.href}
                    className="menu-paper-item"
                    style={
                      {
                        "--paper-width": item.width,
                        "--paper-rotate": item.rotate,
                        "--paper-margin-left": item.marginLeft,
                      } as CSSProperties
                    }
                  >
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      onClick={() => setShowMenu(false)}
                      className="menu-paper-link"
                      style={
                        {
                          background: item.background,
                          color: item.color,
                          fontFamily: monoStack,
                        } as CSSProperties
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              className="menu-contact-note"
              style={{
                fontFamily: noteStack,
              }}
            >
              <p>holla at me*</p>
              <a href="mailto:bshearin15@gmail.com">bshearin15@gmail.com</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
