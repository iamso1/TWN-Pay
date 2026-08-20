import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TWN-Pay",
  description: "TWN-Pay web application",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
