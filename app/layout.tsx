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
        <footer className="w-full bg-black px-8 md:px-28 py-4 text-stone-50">
          <p className="text-xl pb-8">Credits</p>
          <ul>
            <li>
              <a href="https://iconscout.com/icons/angularjs" class="text-underline font-size-sm" target="_blank">Angularjs</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" className="text-sm">IconScout</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/git" class="text-underline font-size-sm" target="_blank">Git</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/github" class="text-underline font-size-sm" target="_blank">Github</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/nodejs" class="text-underline font-size-sm" target="_blank">Nodejs</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm" target="_blank">Icon Mafia</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/javascript" class="text-underline font-size-sm" target="_blank">javascript</a> by <a href="https://iconscout.com/contributors/maninderkaur" class="text-underline font-size-sm">maninderkaur</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/typescript" class="text-underline font-size-sm" target="_blank">Typescript</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/html" class="text-underline font-size-sm" target="_blank">Html</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/css" class="text-underline font-size-sm" target="_blank">Css</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/react" class="text-underline font-size-sm" target="_blank">React</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm" target="_blank">Icon Mafia</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/express" class="text-underline font-size-sm" target="_blank">Express</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
            </li>
            <li>
              <a href="https://iconscout.com/icons/chevron-right" class="text-underline font-size-sm" target="_blank">Chevron Right</a> by <a href="https://iconscout.com/contributors/fatkhulkarim" class="text-underline font-size-sm">Fatkhul Karim</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
            </li>
           
          </ul>
        </footer>
      </body>
    </html>
  );
}
