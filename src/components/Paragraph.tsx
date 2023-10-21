import { FC, ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return <p className="pt-5 text-lg lg:text-2xl">{children}</p>;
};

export default Paragraph;
