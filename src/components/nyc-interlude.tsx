import Image from "next/image";

export default function NycInterlude() {
  return (
    <figure className="nyc-interlude" data-reveal>
      <div className="nyc-interlude-image">
        <Image
          src="/images/nyc/lower-manhattan-street.webp"
          alt="A street scene in Lower Manhattan"
          fill
          sizes="(max-width: 720px) 100vw, 72rem"
        />
      </div>
      <figcaption>
        <span>Outside the screen</span>
        Walking the city is usually where ideas get untangled.
      </figcaption>
    </figure>
  );
}
