import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Header from "./components/Header/Header";

const grotesk = localFont({
  src: [
    {
      path: './grotesk/light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './grotesk/roman.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './grotesk/medium.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={grotesk.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
