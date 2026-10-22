type StarRatingProps = {
  rating: number;
  className?: string;
};

/** Five gold stars for product cards (HTML, not baked into images). */
export function StarRating({ rating, className = "" }: StarRatingProps) {
  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i + 1 <= Math.round(rating);
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className="size-3.5 sm:size-4"
            aria-hidden
          >
            <path
              d="m12 2.5 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.5 6.6 19.3l1-6.1L3.2 8.9l6.1-.9L12 2.5Z"
              fill={filled ? "var(--nv-accent)" : "transparent"}
              stroke="var(--nv-accent)"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        );
      })}
    </div>
  );
}
