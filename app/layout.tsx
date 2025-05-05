import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nathnael Yirga",
  description: "Personal Portfolio - Nathnael Yirga",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <meta name="title" content="Nathnael Yirga" />
        <meta
          name="description"
          content="Personal Portfolio - Nathnael Yirga"
        />
        <meta name="author" content="Nathnael Yirga" />
        <meta
          name="keywords"
          content="python, react, data-engineering, portfolio, developer, Nathnael Yirga"
        />
        <meta property="og:title" content="Nathnael Yirga - Portfolio" />
        <meta
          property="og:description"
          content="Nathnael's Links and Projects!"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nathnaelyirga.dev" />
      </head>
      <body className="bg-gradient-to-r from-red-900 to-slate-700">
        {children}
      </body>
    </html>
  );
}
