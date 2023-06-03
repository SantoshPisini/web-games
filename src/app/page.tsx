"use client";

import { useRouter } from "next/navigation";

const GAMES: Game[] = [
  {
    title: "Tic-Tac-Toe",
    subTitle: "Traditional 2 player game.",
    link: "/tic-tac-toe",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-3xl flex gap-2 h-min mb-16">
        {"Hello "} <div className="animate-waving-hand">👋</div>
      </h1>
      {GAMES.map((item, index) => (
        <button
          type="submit"
          key={index}
          className="group rounded-lg border border-transparent hover:bg-gray-100 hover:border py-4 px-6"
          onClick={() => router.push(item.link)}
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {item.title}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {item.subTitle}
          </p>
        </button>
      ))}
    </div>
  );
}

interface Game {
  title: string;
  subTitle: string;
  link: string;
}
