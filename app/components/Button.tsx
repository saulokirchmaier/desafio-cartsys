"use client";

import React, { FunctionComponent } from "react";

interface ButtonProps {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  label = "",
  onClick,
  disabled,
}) => {
  return (
    <div className="m-1">
      <button
        type="button"
        className={
          disabled
            ? "text-white bg-gray-500 font-bold rounded-lg text-sm p-2 m-1"
            : "focus:outline-none text-white bg-sky-700 hover:bg-sky-900 focus:ring-4 focus:ring-sky-950 font-bold rounded-lg text-sm p-2 m-1"
        }
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
