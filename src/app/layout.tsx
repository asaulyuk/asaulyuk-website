import type { Metadata } from "next";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const rutenia = localFont({
  src: "../fonts/Rutenia2008VasylChebanyk.ttf",
  variable: "--font-rutenia-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marko Asaulyuk",
  description:
    "Marko Asaulyuk — marketing strategist and builder based in San Francisco.",
  metadataBase: new URL("https://asaulyuk.com"),
  alternates: {
    canonical: "https://asaulyuk.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${garamond.variable} ${rutenia.variable} bg-background`}
    >
      <body className="min-h-screen font-serif antialiased">{children}</body>
    </html>
  );
}
