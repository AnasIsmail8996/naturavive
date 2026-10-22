import Image from "next/image";

type BrandIconProps = {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
};

/** Raster/SVG icon from the asset pack. Use `ink` class to force dark stroke. */
export function BrandIcon({
  src,
  alt = "",
  size = 22,
  className = "",
}: BrandIconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      unoptimized={src.endsWith(".svg")}
    />
  );
}
