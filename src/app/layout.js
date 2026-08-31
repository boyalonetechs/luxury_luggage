import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.luxuryluggage.com"),
  title: "Luxury Luggage | Refined Travel Essentials",
  description:
    "Luxury luggage crafted for considered journeys. Discover refined travel pieces that combine function, beauty and lasting craftsmanship.",
  keywords: [
    "luxury luggage",
    "travel essentials",
    "premium luggage",
    "craftsmanship",
    "refined travel",
  ],
  authors: [{ name: "Luxury Luggage" }],
  openGraph: {
    title: "Luxury Luggage | Refined Travel Essentials",
    description:
      "Exceptional luggage designed for journeys that deserve more.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 564,
        height: 444,
        alt: "Luxury Luggage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Luggage | Refined Travel Essentials",
    description:
      "Exceptional luggage designed for journeys that deserve more.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
