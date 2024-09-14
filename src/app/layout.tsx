import Footer from "@/components/footer";
import { NavbarLinks } from "@/components/navbar";
import NavBar from "@/components/navbar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// TODO: Find a way to add Helvetica Neue

const inter = Roboto({
  subsets: ["latin"],
  weight: "500",
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
    <html lang="en" data-theme="mytheme" className=" bg-base-100 ">
      <body className={inter.className}>
        <div className=" drawer drawer-end bg-base-100 ">
          <input id="my-drawer" type="checkbox" className=" drawer-toggle" />
          <div className=" drawer-content">
            <NavBar />
            {children}
            <Footer />
          </div>
          <div className=" drawer-side ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className=" drawer-overlay "
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4 justify-center gap-10 text-5xl font-bold">
              <NavbarLinks />
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
