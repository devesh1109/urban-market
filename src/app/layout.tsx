import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArchMarket | Architectural Designs & Plans",
  description: "The premier marketplace for architectural designs, blueprints, and 3D models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
