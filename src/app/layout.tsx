import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

// TODO: Find a way to add Helvetica Neue

const inter = Roboto({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "WyunaSep",
  description: "India's Leading Oil Water Seperation Specialists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
