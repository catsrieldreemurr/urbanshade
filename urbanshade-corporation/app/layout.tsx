import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntuFont = Ubuntu({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Urbanshade Corporation",
  description: "Welcome to Urbanshade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ubuntuFont.className}
      >
        {children}
      </body>
    </html>
  );
}
