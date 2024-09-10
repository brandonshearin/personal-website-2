"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export default function HeroImage({ images }: { images: StaticImageData[] }) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Image
      alt="golden gate bridge"
      src={images[imgIndex]}
      placeholder="blur"
      quality={100}
      priority
      fill
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
    ></Image>
  );
}
