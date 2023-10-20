import { FC } from "react";
import { NavLink } from "react-router-dom";

interface MainErrorProps {}

const MainError: FC<MainErrorProps> = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 bg-primaryGray text-4xl text-white sm:text-6xl">
      <h1>Page Not Found</h1>
      <h2 className="text-primaryLime">404</h2>

      <NavLink
        to="/"
        className="rounded-full bg-primaryLime-dark px-5 py-2 text-xl sm:text-3xl"
      >
        Back to Home Page
      </NavLink>
    </div>
  );
};

export default MainError;
