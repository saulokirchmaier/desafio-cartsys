import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wizzard Creator",
  description: "Desafio prático CartSys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptss">
      <body className={inter.className}>
        <header className="flex justify-between w-full px-10 py-1 bg-gray-500 shadow-md">
          <h2 className="text-2xl p-1 bold">Wizzard Creator</h2>
          <div className="flex gap-2">
            <a
              className="text-xl p-1 rounded-lg hover:bg-slate-100 transition-colors duration-500"
              href="/"
            >
              Home
            </a>
            <a
              className="text-xl p-1 rounded-lg hover:bg-slate-100 transition-colors duration-500"
              href="/creator"
            >
              Criar
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
