import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nathnael Yirga 🌐",
  description: "Personal Portfolio - Nathnael Yirga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body >{children}</body>
    </html>
  );
}
