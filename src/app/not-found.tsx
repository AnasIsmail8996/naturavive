import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NotFoundContent } from "@/components/not-found/NotFoundContent";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "This page could not be found. Return to Coastal Vitality home to continue.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col overflow-x-clip">
        <NotFoundContent />
      </main>
      <Footer />
    </>
  );
}
