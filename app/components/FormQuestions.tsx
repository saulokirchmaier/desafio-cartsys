"use client";

import React, { FunctionComponent, useEffect, useState } from "react";
import { Button, Input } from "@/app/components";
import { Component } from "../store/WizzardStore";

interface FormQuestionsProps {
  component: (component: Component) => void;
}

const FormQuestions: FunctionComponent<FormQuestionsProps> = ({
  component,
}) => {
  const [inputs, setInputs] = useState([]);

  const setQuantity = (e: number) => {
    const auxArray = [];
    for (let i = 0; i < e; i++) {
      auxArray.push({
        id: i,
        type: "input",
        label: "",
        value: "",
      });
    }

    setInputs([...auxArray]);
  };

  const setInputName = (index: number, text: string) => {
    const newValues = [...inputs];
    newValues[index] = { ...newValues[index], label: text };
    setInputs(newValues);
  };

  const handleAdd = () => {
    component({
      type: "form",
      label: "form",
      inputs: inputs,
    } as Component);
  };

  useEffect(() => {
    console.log("effect");
  }, []);

  return (
    <div>
      <Input
        label="Quantidade de Inputs"
        onChangeValue={(e) => setQuantity(+e)}
        type="number"
      />
      {inputs.map((input) => (
        <Input
          key={input.id}
          label={"Nome da label ".concat(input.id + 1)}
          onChangeValue={(text) => setInputName(input.id, text)}
        />
      ))}
      <Button label="Adicionar" onClick={() => handleAdd()} />
    </div>
  );
};

export default FormQuestions;
