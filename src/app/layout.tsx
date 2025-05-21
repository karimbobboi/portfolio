import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";
import Background from "./components/Background";
import NavBar from "./components/NavBar";

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
      <body>
        <div>
          <NavBar />
        </div>
        <div className='background-wrapper mt-1'>
          <Background />
        </div>
        
        {children}
      </body>
    </html>
  );
}
