"use client";

import React, { ChangeEvent, FunctionComponent } from "react";

interface InputProps {
  label?: string;
  onChangeValue: (e: string) => void;
  type?: "text" | "number";
}

const Input: FunctionComponent<InputProps> = ({
  label = "",
  onChangeValue,
  type
}) => {
  return (
    <div>
      <label className="block p-2 text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-screen p-2 max-w-xs"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChangeValue(e.target.value)
        }
      />
    </div>
  );
};

export default Input;
