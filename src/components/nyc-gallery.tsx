"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const images = [
  {
    src: "/images/nyc/brooklyn-bridge.webp",
    label: "Brooklyn Bridge and Lower Manhattan",
  },
  {
    src: "/images/nyc/downtown-street.webp",
    label: "Downtown Manhattan street",
  },
  {
    src: "/images/nyc/midtown-sunset.webp",
    label: "Midtown Manhattan at sunset",
  },
];

export default function NycGallery() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrent((index) => (index + 1) % images.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [paused]);

  const showPrevious = () => {
    setCurrent((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setCurrent((index) => (index + 1) % images.length);
  };

  return (
    <div
      className="nyc-gallery"
      aria-label="New York City photo gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="nyc-gallery-track"
        style={{ transform: `translate3d(-${current * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div className="nyc-gallery-slide" key={image.src}>
            <Image
              src={image.src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
        ))}
      </div>

      <div className="nyc-gallery-overlay" aria-hidden="true" />

      <div className="nyc-gallery-controls">
        <button
          type="button"
          className="gallery-arrow"
          onClick={showPrevious}
          aria-label="Previous NYC image"
        >
          <HiChevronLeft aria-hidden="true" />
        </button>

        <div className="gallery-dots" aria-label="Choose NYC image">
          {images.map((image, index) => (
            <button
              type="button"
              key={image.src}
              className={`gallery-dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Show ${image.label}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          className="gallery-arrow"
          onClick={showNext}
          aria-label="Next NYC image"
        >
          <HiChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
