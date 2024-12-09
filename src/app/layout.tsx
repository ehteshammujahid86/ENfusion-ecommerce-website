import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const response = await fetch('/api/some-endpoint');
const data = await response.json();
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const text = await response.text();
    if (text.trim()) {
      return JSON.parse(text);  // Safely parse JSON
    } else {
      console.error('Empty or invalid response');
      return {};  // Handle the error gracefully
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {};  // Handle the error gracefully
  }
};


export const metadata: Metadata = {
  title: "EN-Fusion Store",
  description: "A complete e-commerce application with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
