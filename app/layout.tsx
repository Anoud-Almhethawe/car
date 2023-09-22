import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
