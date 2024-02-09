"use client";

import React from "react";
import Link from "next/link";

import { useWizzardStore } from "./store/WizzardStore";

export default function Home() {
  const wizzards = useWizzardStore((state) => state.wizzards);
  const mapedWizzards = Object.values(wizzards);

  return (
    <main className="w-screen h-screen p-4 relative flex bg-slate-200 flex-col">
      <a
        href="/creator"
        className="block w-52 p-4 m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        <h5 className="text-xl font-bold tracking-tight text-gray-900 text-center">
          Criar um novo Wizzard
        </h5>
      </a>
      <h5 className="text-xl font-bold tracking-tight text-gray-900 text-center">
        Wizzards Criadas
      </h5>
      <div className="flex flex-row">
        {mapedWizzards.map((wizzard) => {
          return (
            <Link
              href={`/wizzard/${wizzard.id}`}
              key={wizzard.id}
              className="block w-52 p-4 m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <h5 className="text-xl font-bold tracking-tight text-gray-900 text-center">
                {wizzard.name}
              </h5>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
