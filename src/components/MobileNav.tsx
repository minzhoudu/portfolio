import { FC } from "react";
import { NavLink } from "react-router-dom";

interface MobileNavProps {}

const MobileNav: FC<MobileNavProps> = () => {
  return (
    <>
      <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-primaryGray">
        <li className="py-6 text-4xl">
          <NavLink
            className={({ isActive }) => (isActive ? "text-primaryLime" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink
            className={({ isActive }) => (isActive ? "text-primaryLime" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink className="pointer-events-none opacity-25" to="/work">
            My Work
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink className="pointer-events-none opacity-25" to="/content">
            Content
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MobileNav;
