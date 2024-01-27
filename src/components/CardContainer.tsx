import React from "react";

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-[20px] border p-4 rounded-lg mx-auto relative">
      {children}
    </div>
  );
};
export default CardContainer;
