import type { Metadata } from "next";
import "./globals.css";
import { ProviderAuth } from "@/context/AppContext";

export const metadata: Metadata = {
  title: "Master FM",
  description: "The best radio fm web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
          <ProviderAuth>
            {children}
          </ProviderAuth>
      </body>
    </html>
  );
}
