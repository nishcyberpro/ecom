import React from "react";

export const SolidButton = ({
  btnText,
  onClick,
}: {
  btnText: string;
  onClick?: () => void;
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-primary border text-white px-6 py-2 cursor-pointer rounded-md font-bold hover:bg-white hover:text-primary hover:border-primary transition w-full"
      >
        {btnText}
      </button>
    </div>
  );
};

export const OutlineButton = ({
  btnText,
  onClick,
}: {
  btnText: string;
  onClick?: () => void;
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-white border-1 border-bg-secondary text-secondary px-6 py-2 rounded-md font-bold hover:bg-secondary hover:text-white transition cursor-pointer"
      >
        {btnText}
      </button>
    </div>
  );
};
