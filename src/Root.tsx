import { FC } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

interface RootProps {}

const Root: FC<RootProps> = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
