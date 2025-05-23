import React, { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  widthClass?: string; // Optional custom width class
}

const Container: FC<ContainerProps> = ({
  children,
  widthClass = "max-w-[1400px]",
}) => {
  return (
    <div className="w-screen">
      <div className={`${widthClass} mx-auto`}>{children}</div>
    </div>
  );
};

export default Container;
