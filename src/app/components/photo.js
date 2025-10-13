"use client";
import Image from "next/image";
import "../styling/photo.css";
import { useState } from "react";

export default function Photo({ src, alt, width, height, className }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    if (currentSrc.endsWith(".jpg")) {
      setCurrentSrc(currentSrc.replace(".jpg", ".png"));
    }
  };

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={`image-more ${className}`}
      onError={handleError}
      loading="lazy"
      placeholder="blur"
      blurDataURL="/placeholder.png"
    />
  );
}
