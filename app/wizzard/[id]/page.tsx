"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/app/components";

import { componentItentifier } from "./../../helper/renderHelper";
import { useWizzardStore } from "@/app/store/WizzardStore";

export default function Wizzard({ params }) {
  const { id } = params;

  const [actualPage, setActualPages] = useState(0);
  const [components, setComponentes] = useState([]);
  const [pageTitle, setPageTitle] = useState("");

  const wizzard = useWizzardStore((state) => state.wizzards[id]);
  const pagesQtt = wizzard.pages.length;

  useEffect(() => {
    setComponentes(wizzard.pages[actualPage].components);
    setPageTitle(wizzard.pages[actualPage].name);
  }, [actualPage]);

  const componetsPrinter = () => {
    return (
      <div>{components.map((component) => componentItentifier(component))}</div>
    );
  };

  return (
    <main className="w-screen h-screen relative flex bg-slate-200 flex-col p-4">
      <div className=" flex-1 rounded-lg m-2 bg-white">
        <div className="flex justify-between  w-full px-10 py-1 bg-green-500 shadow-md rounded-t-lg">
          <Button
            label="Voltar"
            onClick={() => setActualPages(actualPage - 1)}
            disabled={actualPage === 0}
          />
          <div>
            <p className="text-xl p-1 align-middle">
              {wizzard.name} | {pageTitle}
            </p>
          </div>
          <Button
            label="Proxima"
            onClick={() => setActualPages(actualPage + 1)}
            disabled={actualPage === pagesQtt - 1}
          />
        </div>
        <div className="flex gap-2">{componetsPrinter()}</div>
      </div> 
    </main>
  );
}
