import type { Metadata } from "next";
import "./globals.css";
import { Spectral } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

const spectral = Spectral({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wang Medical",
  description: "Wang Medical",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spectral.className} antialiased`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
