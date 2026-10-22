import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";
import { buildPageMetadata, seoConfig } from "@/lib/seo";

const TrustBar = dynamic(
  () =>
    import("@/components/home/TrustBar").then((m) => ({ default: m.TrustBar })),
  { loading: () => <SectionSkeleton className="min-h-[6rem]" /> },
);

const Benefits = dynamic(
  () =>
    import("@/components/home/Benefits").then((m) => ({ default: m.Benefits })),
  { loading: () => <SectionSkeleton className="min-h-[28rem]" /> },
);

const BestSellers = dynamic(
  () =>
    import("@/components/home/BestSellers").then((m) => ({
      default: m.BestSellers,
    })),
  { loading: () => <SectionSkeleton className="min-h-[36rem]" /> },
);

const Ingredients = dynamic(
  () =>
    import("@/components/home/Ingredients").then((m) => ({
      default: m.Ingredients,
    })),
  { loading: () => <SectionSkeleton className="min-h-[28rem]" /> },
);

const Testimonials = dynamic(
  () =>
    import("@/components/home/Testimonials").then((m) => ({
      default: m.Testimonials,
    })),
  { loading: () => <SectionSkeleton className="min-h-[28rem]" /> },
);

const Subscribe = dynamic(
  () =>
    import("@/components/home/Subscribe").then((m) => ({
      default: m.Subscribe,
    })),
  { loading: () => <SectionSkeleton className="min-h-[28rem]" /> },
);

export const metadata: Metadata = buildPageMetadata({
  title: seoConfig.title,
  description: seoConfig.description,
  path: "/",
});

/**
 * Full landing (matches reference):
 * Header → Hero → Trust → Benefits → Best Sellers → Ingredients → Testimonials → Subscribe → Footer
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col overflow-x-clip">
        <Hero />
        <TrustBar />
        <Benefits />
        <BestSellers />
        <Ingredients />
        <Testimonials />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
