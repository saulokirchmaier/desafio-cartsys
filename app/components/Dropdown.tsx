"use client";

import React, { FunctionComponent, useState } from "react";
import CardQuestions from "./CardQuestions";
import FormQuestions from "./FormQuestions";
import ImageBoxQuestions from "./ImageBoxQuestions";
import { Input } from ".";
import { Component } from "../store/WizzardStore";

interface DropdownProps {
  component: (component: Component) => void;
}

const Dropdown: FunctionComponent<DropdownProps> = ({component}) => {
  const [selected, setSelected] = useState("");

  const handleComponent = (element: Component) => {
    component(element);
  }

  return (
    <div className="w-64">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Selecione um componente
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value=""></option>
        <option value="form">Formulário</option>
        <option value="image">Box de Imagem</option>
        <option value="card">Card</option>
      </select>
      {selected === "card" && <CardQuestions component={handleComponent} />}
      {selected === "form" && <FormQuestions component={handleComponent} />}
      {selected === "image" && <ImageBoxQuestions component={handleComponent} />}
    </div>
  );
};

export default Dropdown;
