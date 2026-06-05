import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GermanGuru — Speak German. Confidently.",
  description:
    "Learn conversational German with Ahmad and Ben. Practical, day-to-day German for students and professionals moving to Germany. Small groups or 1-on-1 sessions.",
  keywords: [
    "German lessons",
    "learn German",
    "conversational German",
    "German tutor",
    "German for work",
    "German for students",
  ],
  openGraph: {
    title: "GermanGuru — Speak German. Confidently.",
    description:
      "Practical conversational German for all levels. Small groups or 1-on-1 with experienced teachers Ahmad and Ben.",
    type: "website",
    images: [
      {
        url: "/team.JPG",
        width: 1200,
        height: 630,
        alt: "Ahmad and Ben — GermanGuru teachers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GermanGuru — Speak German. Confidently.",
    description:
      "Practical conversational German for all levels. Small groups or 1-on-1 with experienced teachers Ahmad and Ben.",
    images: ["/team.JPG"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
