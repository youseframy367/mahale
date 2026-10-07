import type { Metadata } from "next";
import { SiteChrome } from "@/components/Basic/site-chrome";
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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
