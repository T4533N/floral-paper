import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pikzels - Best YouTube Thumbnail Generator",
  description:
    "Pikzels  instantly transforms your ideas into stunning YouTube thumbnails through the world's first AI thumbnail generator. Simply type in your prompt and watch as it becomes a reality in under 30 seconds.",
  twitter: {
    title: "Pikzels  - Best YouTube Thumbnail Generator",
    description:
      "Pikzels instantly transforms your ideas into stunning YouTube thumbnails through the world's first AI thumbnail generator. Simply type in your prompt and watch as it becomes a reality in under 30 seconds.",
    card: "summary_large_image",
    images: [
      "https://res.cloudinary.com/dl1vvruit/image/upload/v1702320215/uu7ajderffb9hzkcfzif.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
