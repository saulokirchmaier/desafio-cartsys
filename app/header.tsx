"use client";

export default function Head() {
  return (
    <header className="flex justify-between w-full px-10 py-1 bg-slate-200 shadow-md">
      <h2 className="text-xl p-1">Wizzard Creator</h2>
      <a
        className="text-xl p-1 rounded-lg hover:bg-slate-100 transition-colors duration-500"
        href="/"
      >
        Home
      </a>
    </header>
  );
}
