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
        <footer className="flex w-full bg-black h-12 px-8 md:px-28 py-4 text-stone-50">
          <ul>
            <li>
              <a href="https://www.freepik.com/search">Icon by Kiranshastry</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/angularjs" className="text-underline font-size-sm" target="_blank">Angularjs</a> by <a href="https://iconscout.com/contributors/icon-mafia" className="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" className="text-underline font-size-sm">IconScout</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/github" className="text-underline font-size-sm" target="_blank">Github</a> by <a href="https://iconscout.com/contributors/icon-mafia" className="text-underline font-size-sm" target="_blank">Icon Mafia</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/javascript" className="text-underline font-size-sm" target="_blank">Javascript</a> by <a href="https://iconscout.com/contributors/icon-mafia" className="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" className="text-underline font-size-sm">IconScout</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/node-js" className="text-underline font-size-sm" target="_blank">Node Js</a> by <a href="https://iconscout.com/contributors/icon-mafia" className="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/typescript" className="text-underline font-size-sm" target="_blank">Typescript</a> by <a href="https://iconscout.com/contributors/icon-54" className="text-underline font-size-sm" target="_blank">Icon 54</a>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
