import Navbar from "./_components/Layout.tsx/Navbar/Navbar";
import "./globals.css";

import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
