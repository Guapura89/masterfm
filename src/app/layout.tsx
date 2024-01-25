import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Master FM",
  description: "The best radio fm web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
