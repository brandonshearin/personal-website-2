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
              opacity: isActive ? 1 : 0,
              pointerEvents: "none",
              transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
              willChange: "opacity",
              zIndex: isPrevious ? 2 : isActive ? 1 : 0,
            }}
          />
        );
      })}
    </div>
  );
}
