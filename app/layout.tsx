import type { Metadata } from "next";
import { Geist, Geist_Mono,  } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SFProDisplay = localFont({
  src: [
    {
      path: '../src/assets/fonts/sf-pro-display-cufonfonts/SFPRODISPLAYREGULAR.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../src/assets/fonts/sf-pro-display-cufonfonts/SFPRODISPLAYMEDIUM.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../src/assets/fonts/sf-pro-display-cufonfonts/SFPRODISPLAYBOLD.ttf',
      weight: '700',
      style: 'normal',
    },
  ]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PAXIV",
  description: "PAXIV ALL IN ONE INTELLIGENCE PLATFORM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={SFProDisplay.className}>
      <body
        className={SFProDisplay.className}
      >
        {children}
      </body>
    </html>
  );
}
