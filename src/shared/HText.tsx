import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="w-full  font-montserrat text-primary-500 text-center text-5xl font-bold">{children}</h1>
  );
};

export default HText;
