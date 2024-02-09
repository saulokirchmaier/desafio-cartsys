"use client";

import React, { useEffect, useState } from "react";
import { Button, Dropdown, Input } from "@/app/components";

import { componentItentifier } from "./../helper/renderHelper";
import { Component, Page, Wizzard, useWizzardStore } from "../store/WizzardStore";

export default function Creator() {
  const [wizzards, addToWizzard] = useWizzardStore((state) => [
    state.wizzards,
    state.addToWizzard,
  ]);
  const mapedWizzards = Object.values(wizzards);
  const wizzardId = mapedWizzards.length;

  const [wizzard, setWizzard] = useState<Wizzard>({
    id: wizzardId,
    name: "Wizzard",
    position: "portrait",
    pages: [
      {
        id: 0,
        name: "página",
        components: [],
      },
    ],
  });
  const [pagesQtt, setPagesQtt] = useState(1);
  const [actualPage, setActualPages] = useState(0);
  const [reload, setReload] = useState(false);

  const componetsPrinter = () => {
    return (
      <div>
        {wizzard.pages[actualPage].components.map((component) =>
          componentItentifier(component)
        )}
      </div>
    );
  };

  const handleWizzardCreator = (type: string, label: string) => {
    switch (type) {
      case "wizzardName":
        setWizzard({ ...wizzard, name: label });
        break;
      case "position":
        setWizzard({ ...wizzard, position: label });
        break;
      case "pageName":
        const page = wizzard.pages[actualPage];
        page.name = label;
        setWizzard({
          ...wizzard,
          pages: wizzard.pages.map((item) =>
            item.id === actualPage ? page : item
          ),
        });
        break;
      case "newPage":
        setWizzard({
          ...wizzard,
          pages: [
            ...wizzard.pages,
            {
              id: wizzard.pages.length,
              name: "página",
              components: [],
            },
          ],
        });
        setPagesQtt(pagesQtt + 1);
        break;
      default:
        break;
    }
  };

  const receiveComponent = (element: Component) => {
    const wizz = wizzard;
    element.id = wizzard.pages[actualPage].components.length;
    wizz.pages[actualPage].components.push(element);
    setWizzard(wizz);
    setReload(!reload);
  };

  useEffect(() => {}, [reload])

  return (
    <main className="w-screen h-screen relative flex bg-slate-200 flex-col p-4">
      <div className="flex flex-row flex-wrap gap-2">
        <div>
          <Input
            label="Nome do Wizzard"
            onChangeValue={(e) => handleWizzardCreator("wizzardName", e)}
          />
          {/* <div className="w-64">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Selecione uma orientação
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => handleWizzardCreator("position", e.target.value)}
            >
              <option value=""></option>
              <option value="portrair">Paisagem</option>
              <option value="image">Retrato</option>
            </select>
          </div> */}

          <Input
            label="Nome da página"
            onChangeValue={(e) => handleWizzardCreator("pageName", e)}
          />
        </div>

        <Dropdown component={receiveComponent} />
      </div>

      <Button
        label="Adicionar pagina"
        onClick={() => handleWizzardCreator("newPage", "newPage")}
      />
    
      <Button label="Salvar Wizzard" onClick={() => {addToWizzard(wizzardId, wizzard); setReload(!reload);}} />

      <div className=" flex-1 rounded-lg m-2 bg-white">
        <div className="flex justify-between  w-full px-10 py-1 bg-green-500 shadow-md rounded-t-lg">
          <Button
            label="Voltar"
            onClick={() => setActualPages(actualPage - 1)}
            disabled={actualPage === 0}
          />
          <div>
            <p className="text-xl p-1 align-middle">
              {wizzard.name} | {wizzard.pages[actualPage].name}
            </p>
          </div>
          <Button
            label="Proxima"
            onClick={() => setActualPages(actualPage + 1)}
            disabled={actualPage === pagesQtt - 1}
          />
        </div>

        {componetsPrinter()}
      </div>
    </main>
  );
}
