import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lets-Meet",
  description: "A video meeting application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-2">{children}</body>
    </html>
  );
}
