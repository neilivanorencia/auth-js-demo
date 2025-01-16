import { auth } from "@/auth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth.js Demo — A Simple Authentication System",
  metadataBase: new URL("https://auth-js-demo.vercel.app/"),
  keywords: [
    "Auth.js",
    "authentication",
    "login form",
    "registration form",
    "OAuth integration",
    "Google login",
    "GitHub login",
    "password recovery",
    "forgot password feature",
    "two-factor authentication",
    "2FA",
    "email verification",
    "role-based access control",
    "admin page",
    "settings page",
    "user account management",
    "authentication toolbox",
    "reusable authentication components",
    "authentication hooks",
    "authentication utilities",
    "secure authentication",
  ],
  authors: [
    { name: "Neil Ivan Orencia", url: "https://github.com/neilivanorencia" },
  ],
  creator: "Neil Ivan Orencia",
  publisher: "Neil Ivan Orencia",
  openGraph: {
    type: "website",
    title: "Auth.js Demo — A Simple Authentication System",
    description:
      "Just a simple, functional demo of some of the most important functionalities within Auth.js.",
    url: "https://auth-js-demo.vercel.app/",
    siteName: "Auth.js Demo",
    images: [
      {
        url: "https://auth-js-demo.vercel.app/website-preview.jpg",
        width: 2400,
        height: 1260,
        alt: "Auth.js Demo Website Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auth.js Demo — A Simple Authentication System",
    description:
      "Auth.js Demo is a simple, functional demo of some of the most important functionalities within Auth.js.",
    images: [
      {
        url: "https://auth-js-demo.vercel.app/website-preview.jpg",
        width: 2400,
        height: 1260,
        alt: "Auth.js Demo Website Preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://auth-js-demo.vercel.app/",
  },
  applicationName: "Auth.js Demo",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
