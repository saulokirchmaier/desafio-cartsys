"use client";

import React from "react";
import { Button, Card, Form, ImageBox, Input, OutlineButton } from "@/app/components";
import { Component } from "../store/WizzardStore";

export const componentItentifier = ({ id, type, label, title, content, image, inputs }: Component) => {
  switch (type) {
    case "input":
      return (
        <Input key={id + Math.random()} label={label} onChangeValue={(e) => console.log(e)} />
      );
    case "button":
      return (
      <Button
          key={id + Math.random()}
          label={label}
          onClick={() => console.log("button log")}
        />
      );
    case "card":
      return <Card key={id + Math.random()} title={title} content={content} />;
    case "image":
      return <ImageBox image={image} key={id} />;
      case "form":
        return <Form inputs={inputs}/>;
    default:
      break;
  }
};
