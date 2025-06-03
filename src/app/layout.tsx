import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { BackgroundProvider } from "./components/BackgroundProvider";


const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300"],
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
    <html lang="en" className={urbanist.className}>
      <body>
        <BackgroundProvider>
          {children}
        </BackgroundProvider>
      </body>
    </html>
  );
}