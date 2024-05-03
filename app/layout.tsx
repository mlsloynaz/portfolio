import type { Metadata } from "next";
import "./globals.css";


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
      <body className="bg-stone-50">
        <header className="fixed z-20 left-0 top-0 flex flex-col w-full justify-center border-b border-gray-300">
          <div className="bg-black h-12 px-8 md:px-28 py-4 text-stone-50">
            Maria Sierra-Loynaz, Web developer portfolio
          </div>
          <div className="h-20 px-8 md:px-28 py-4 bg-stone-50">menu
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
