"use client";

import React, { FunctionComponent, useState } from "react";
import { Button, Input } from "@/app/components";
import { Component } from "../store/WizzardStore";

interface FormProps {
  inputs: {
    id: number;
    label: string;
    value: string;
  }[];
}

const Form: FunctionComponent<FormProps> = ({ inputs }) => {
  const [values, setValues] = useState(inputs);

  const handleInput = (index: number, text: string) => {
    const newValues = [...values];
    newValues[index] = { ...newValues[index], value: text };
    setValues(newValues);
  };

  return (
    <form className="max-w-sm m-1">
      {inputs.map(({ id, label }) => (
        <Input
          label={label}
          key={id}
          onChangeValue={(e) => handleInput(id, e)}
        />
      ))}
      <Button label="Adicionar" onClick={() => {}} />
    </form>
  );
};

export default Form;
