import type { Metadata } from "next";
import "@/styles/globals.css";

// shared
import Providers from "@/modules/shared/providers";
import { Toaster } from "@/modules/shared/toaster";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

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
      <body className="bg-dark-2">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
