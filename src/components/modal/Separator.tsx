type SeparatorProps = {
  direction?: "horizontal" | "vertical";
};

export const Separator = ({ direction = "horizontal" }: SeparatorProps) => {
  return (
    <div
      className={`border border-primaryGray ${
        direction === "horizontal" ? "w-full" : "h-full"
      }`}
    ></div>
  );
};
