"use client";

import Image from "next/image";
import React, { FunctionComponent } from "react";

import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";

interface ImageBoxProps {
  image: number;
}

const ImageBox: FunctionComponent<ImageBoxProps> = ({ image = 1 }) => {
  let source = image1;

  switch (image) {
    case 2:
      source = image2;
      break;
    case 3:
      source = image3;
      break;
    case 4:
      source = image4;
      break;
    case 5:
      source = image5;
      break;
    case 6:
      source = image6;
      break;
    default:
      break;
  }

  return (
    <div className="h-52 w-72 relative rounded-lg ">
      <Image
        src={source}
        alt="Image"
        className="h-auto max-w-lg rounded-lg m-2"
        layout="fill"
        objectFit="fill"
      />
    </div>
  );
};

export default ImageBox;
