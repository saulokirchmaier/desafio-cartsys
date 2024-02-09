"use client";

import React, { FunctionComponent } from "react";

interface CardProps {
  title?: string;
  content?: string;
}

const Card: FunctionComponent<CardProps> = ({ title = "", content = "" }) => {
  return (
    <div
      className="block max-w-sm p-4 m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  flex-col"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
        {title}
      </h5>
      <p className="font-normal text-gray-700 text-center">
        {content}
      </p>
    </div>
  );
};

export default Card;
