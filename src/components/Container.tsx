import { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative p-[20px] mx-auto pt-[70px] w-full max-w-[600px]">
      {children}
    </div>
  );
};
export default Container;
