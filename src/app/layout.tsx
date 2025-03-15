"use client"; // Ensure it's a Client Component

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    const gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-EC03YDBCM1";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-EC03YDBCM1');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />

        {/* SEO Meta Tags */}
        <meta name="title" content="AvianInTek" />
        <meta name="description" content="AvianInTek provides cutting-edge SaaS solutions, cloud services, and consultancy to empower businesses with technology." />
        <meta name="keywords" content="AvianInTek website, Akkil M G, Srujan Rai, Saiesh Savant, Aman Shetty, Mangalore, Mangaluru, Karnataka, India, Indian tech, AvianInTek, SaaS, Cloud Services, Tech Consultancy, Software Solutions, Next.js, Enterprise Solutions, Web Development" />
        <meta name="author" content="AvianInTek Team" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://avianintek.com/" />
        <meta property="og:title" content="AvianInTek" />
        <meta property="og:description" content="Providing cutting-edge SaaS solutions, cloud services, and consultancy." />
        <meta property="og:image" content="/assets/seo/website.png" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AvianInTek - Innovative Tech Solutions" />
        <meta name="twitter:description" content="Providing cutting-edge SaaS solutions, cloud services, and consultancy." />
        <meta name="twitter:image" content="/assets/seo/website.png" />

        {/* Favicon */}
        <link rel="icon" href="/assets/logo/logo.png" />
        <link rel="apple-touch-icon" href="/assets/logo/logo.png" />

        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-3201703650411352" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3201703650411352" crossOrigin="anonymous"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
