import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
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
  title: "User Manager App",
  description: "Simple app to manage users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <header className="w-full">
          <Nav />
        </header>
        <main className="flex-1 flex items-center justify-center">
          <div className="flex flex-col p-20 rounded-2xl bg-gray-500/20 backdrop-blur-md">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
