import Image from "next/image";

const images = [
  "/images/nyc/brooklyn-bridge.webp",
  "/images/nyc/dumbo-street.webp",
  "/images/nyc/daytime-skyline.webp",
  "/images/nyc/downtown-street.webp",
  "/images/nyc/new-york-sign.webp",
  "/images/nyc/lower-manhattan-street.webp",
  "/images/nyc/midtown-sunset.webp",
  "/images/nyc/new-yorker.webp",
  "/images/nyc/night-skyline.webp",
] as const;

export default function NycGallery() {
  return (
    <div className="nyc-gallery" aria-hidden="true">
      <div className="nyc-gallery-track">
        {[0, 1].map((copy) =>
          images.map((src, index) => (
            <div className="nyc-gallery-slide" key={`${copy}-${src}`}>
              <Image
                src={src}
                alt=""
                fill
                priority={copy === 0 && index < 3}
                sizes="33vw"
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
            </div>
          )),
        )}
      </div>

      <div className="nyc-gallery-overlay" />
    </div>
  );
}
