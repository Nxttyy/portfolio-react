import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nathnael Yirga",
  description: "Personal Portfolio - Nathnael Yirga",
  icons: {
    icon: '/icon.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className="bg-gradient-to-r from-red-900 to-slate-700">
        {children}
      </body>
    </html>
  );
}

