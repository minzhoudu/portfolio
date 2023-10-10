import { FC, ReactNode } from "react";

interface TechnologyProps {
  children: ReactNode;
}

const Technology: FC<TechnologyProps> = ({ children }) => {
  return <span className="font-bold text-primaryLime"> {children}</span>;
};

export default Technology;
