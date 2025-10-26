import type { Metadata } from "next";
import { Titillium_Web, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const Titillium_font = Titillium_Web({
  subsets: ["latin"],
  weight: ["400"]
});

export const Source_Code_Pro_Font = Source_Code_Pro({
    subsets: ["latin"],
})

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
        className={Titillium_font.className}
      >
        {children}
      </body>
    </html>
  );
}
