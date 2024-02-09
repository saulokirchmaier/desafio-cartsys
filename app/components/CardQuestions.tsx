"use client";

import React, { FunctionComponent, useEffect, useState } from "react";
import { Button, Input } from "@/app/components";
import { Component } from "../store/WizzardStore";

interface CardQuestionsProps {
  component: (component: Component) => void;
}

const CardQuestions: FunctionComponent<CardQuestionsProps> = ({component}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    component({
      type: 'card',
      title: title,
      content: content,
    } as Component)
  }

  return (
    <div>
      <Input label="Titulo do Card" onChangeValue={(e) => setTitle(e)} />
      <Input label="Texto do Card" onChangeValue={(e) => setContent(e)} />
      <Button label="Adicionar" onClick={() => handleAdd()} disabled={title === "" || content ===""} />
    </div>
  );
};

export default CardQuestions;
