import type { Metadata } from "next";
import { Navbar } from "@/components/Basic/navbar";
import { Footer } from "@/components/Basic/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "محلي",
  description: "اكتشف المحلات والمنتجات المحلية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}