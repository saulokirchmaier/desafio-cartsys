"use client";

import React, { FunctionComponent, useEffect, useState } from "react";
import { Button, Input } from "@/app/components";

import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import Image from "next/image";
import { Component } from "../store/WizzardStore";

interface ImageBoxQuestionsProps {
  component: (component: Component) => void;
}

const ImageBoxQuestions: FunctionComponent<ImageBoxQuestionsProps> = ({
  component,
}) => {
  const [imageNumber, setImageNumber] = useState(1);

  const handleAdd = () => {
    component({
      type: "image",
      label: "image",
      image: imageNumber,
    } as Component);
  };

  return (
    <>
      <div className="flex flex-wrap w-80 m-2">
        <div
          className={
            imageNumber === 1
              ? "rounded-lg bg-sky-700 m-2 p-2"
              : "rounded-lg bg-transparent m-2 p-2"
          }
          onClick={() => setImageNumber(1)}
        >
          <div className="h-24 w-32 relative rounded-lg ">
            <Image
              src={image1}
              alt="Image"
              className="h-auto max-w-lg rounded-lg "
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
        <div
          className={
            imageNumber === 2
              ? "rounded-lg bg-sky-700 m-2 p-2"
              : "rounded-lg bg-transparent m-2 p-2"
          }
          onClick={() => setImageNumber(2)}
        >
          <div className="h-24 w-32 relative rounded-lg ">
            <Image
              src={image2}
              alt="Image"
              className="h-auto max-w-lg rounded-lg "
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
        <div
          className={
            imageNumber === 3
              ? "rounded-lg bg-sky-700 m-2 p-2"
              : "rounded-lg bg-transparent m-2 p-2"
          }
          onClick={() => setImageNumber(3)}
        >
          <div className="h-24 w-32 relative rounded-lg ">
            <Image
              src={image3}
              alt="Image"
              className="h-auto max-w-lg rounded-lg "
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
        <div
          className={
            imageNumber === 4
              ? "rounded-lg bg-sky-700 m-2 p-2"
              : "rounded-lg bg-transparent m-2 p-2"
          }
          onClick={() => setImageNumber(4)}
        >
          <div className="h-24 w-32 relative rounded-lg ">
            <Image
              src={image4}
              alt="Image"
              className="h-auto max-w-lg rounded-lg "
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
        <div
          className={
            imageNumber === 5
              ? "rounded-lg bg-sky-700 m-2 p-2"
              : "rounded-lg bg-transparent m-2 p-2"
          }
          onClick={() => setImageNumber(5)}
        >
          <div className="h-24 w-32 relative rounded-lg ">
            <Image
              src={image5}
              alt="Image"
              className="h-auto max-w-lg rounded-lg "
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
        <div
          className={
            imageNumber === 6
              ? "rounded-lg bg-sky-700 m-2 p-2"
              : "rounded-lg bg-transparent m-2 p-2"
          }
          onClick={() => setImageNumber(6)}
        >
          <div className="h-24 w-32 relative rounded-lg ">
            <Image
              src={image6}
              alt="Image"
              className="h-auto max-w-lg rounded-lg "
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
      </div>
      <Button
        label={"Adicionar imagem selecionada"}
        onClick={() => handleAdd()}
      />
    </>
  );
};

export default ImageBoxQuestions;
