import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AvianInTek",
  description: "This is main page of AvianInTek",
  keywords: [
    "AvianInTek", "AvianInTek", "AvianInTek website", 
    "Akkil", "Akkil M G", "Srujan", "Srujan Rai", "Saiesh", "Saiesh Savant", "Aman", "Aman Shetty",
    "Mangalore", "Mangaluru", "Karnataka", "India", "Indian", "Indian website", "Indian tech website",
    "Indian tech", "Indian tech team"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar`}>
        {children}
      </body>
    </html>
  );
}
