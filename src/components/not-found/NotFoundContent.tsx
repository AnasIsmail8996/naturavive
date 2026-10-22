import { ButtonLink } from "@/components/ui/ButtonLink";
import { notFoundContent } from "@/data/error";

export function NotFoundContent() {
  return (
    <section className="flex flex-1 flex-col items-start justify-center overflow-x-clip px-4 py-24 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nv-primary)]">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--nv-ink)] sm:text-5xl">
          {notFoundContent.title}
        </h1>
        <p className="mt-4 max-w-md text-base text-[var(--nv-muted)] sm:text-lg">
          {notFoundContent.body}
        </p>
        <div className="mt-8">
          <ButtonLink href={notFoundContent.cta.href}>
            {notFoundContent.cta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
