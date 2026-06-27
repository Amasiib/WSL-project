import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "WASL Platform",
  description: "Enterprise Solution for Waste Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // أضفنا className للخط واستخدمنا dir="rtl" للغة العربية
    <html lang="ar" dir="rtl" className={`${plex.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-rawiya">
        {children}
      </body>
    </html>
  );
}