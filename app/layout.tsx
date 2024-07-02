import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import { Footer } from "./components/footer";
import { inter } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Maria Sierra Web developer portfolio",
  description: "Maria Sierra web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-stone-50 sm:overflow-x-hidden`}>
        <Header />
        <div className="flex flex-col items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
