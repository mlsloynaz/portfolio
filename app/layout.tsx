import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "MariaSierra Web developer",
  description: "Maria Sierra web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-50 sm:overflow-x-hidden">
        <Header />
        <div className="flex flex-col items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
