"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ROTATION_INTERVAL_MS = 3000;
const FADE_DURATION_MS = 1200;

export default function HeroImage({ images }: { images: string[] }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [previousImgIndex, setPreviousImgIndex] = useState<number | null>(null);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setImgIndex((prevIndex) => {
        setPreviousImgIndex(prevIndex);
        return (prevIndex + 1) % images.length;
      });
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (previousImgIndex === null) {
      return;
    }

    const timeout = setTimeout(() => {
      setPreviousImgIndex(null);
    }, FADE_DURATION_MS);

    return () => clearTimeout(timeout);
  }, [imgIndex, previousImgIndex]);

  if (images.length === 0) {
    return null;
  }

  const activeImgIndex = imgIndex % images.length;
  const nextImgIndex =
    images.length > 1 ? (activeImgIndex + 1) % images.length : null;
  const layerIndexes = [nextImgIndex, activeImgIndex, previousImgIndex]
    .filter((index): index is number => index !== null)
    .filter((index, position, indexes) => indexes.indexOf(index) === position);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      {layerIndexes.map((index) => {
        const isActive = index === activeImgIndex;
        const isPrevious = index === previousImgIndex;

        return (
          <Image
            key={index}
            alt=""
            src={images[index]}
            quality={100}
            priority={index === 0}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              filter: "saturate(0.82) contrast(0.92) brightness(0.9)",
              opacity: isActive ? 1 : 0,
              pointerEvents: "none",
              transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
              willChange: "opacity",
              zIndex: isPrevious ? 2 : isActive ? 1 : 0,
            }}
          />
        );
      })}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255, 255, 245, 0.14) 0%, rgba(255, 255, 245, 0.02) 42%, rgba(19, 19, 19, 0.24) 100%), linear-gradient(35deg, rgba(221, 45, 31, 0.12) 0%, rgba(231, 181, 58, 0.08) 48%, rgba(27, 63, 140, 0.1) 100%)",
          mixBlendMode: "soft-light",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 22% 18%, rgba(255, 255, 245, 0.12), transparent 28%), linear-gradient(0deg, rgba(221, 45, 31, 0.16), transparent 38%)",
          pointerEvents: "none",
          zIndex: 4,
        }}
      />
      <div className="hero-print-grain" />
    </div>
  );
}
