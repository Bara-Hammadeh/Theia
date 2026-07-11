import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { baseMetadata, structuredData } from "@/lib/seo";

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#06080C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
        />

        {/* Ambient backdrop */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-70" />
          <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />
          <div className="absolute right-[-10%] top-[30%] h-[50vh] w-[40vw] rounded-full bg-iris/[0.06] blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] h-[45vh] w-[40vw] rounded-full bg-accent-2/[0.05] blur-[120px]" />
        </div>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface-2 focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>

        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
