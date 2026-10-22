import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans-body",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full flex-col overflow-x-clip font-sans"
        suppressHydrationWarning
      >
        <OrganizationJsonLd />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
