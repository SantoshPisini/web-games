import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Games",
  description: "A simple games app on web by Santosh Pisni.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <header className="fixed top-0 w-full text-2xl border-b p-4 shadow-lg bg-indigo-700 text-white">
            {" Games "}
          </header>
          <main className="my-16 h-[calc(100vh-8rem)] overflow-scroll">
            {children}
          </main>
          <footer className="fixed h-16 bottom-0 w-screen p-4 bg-gray-100 flex items-center justify-center gap-1">
            {"Developed by  "}
            <a
              href="https://santoshpisini.github.io&utm_source=games&utm_medium=games-footer&utm_campaign=games"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Santosh Pisini
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
