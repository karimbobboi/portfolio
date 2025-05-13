import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";

const maven_pro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={maven_pro.className}>
      <body>{children}</body>
    </html>
  );
}
