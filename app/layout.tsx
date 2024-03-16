import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from '@/app/component/Navbar';
import Banner from '@/app/component/Banner';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce - start your shopping today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Banner />
        {children}
      </body>
    </html>
  );
}
