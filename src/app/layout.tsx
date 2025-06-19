import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kesatiran Web",
  description: "Web for Kesatiran circle of friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
