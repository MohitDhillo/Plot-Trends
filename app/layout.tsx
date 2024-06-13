import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const fira = Fira_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  );
}
