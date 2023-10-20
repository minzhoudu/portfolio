import { FC } from "react";
import { NavLink } from "react-router-dom";

interface MobileNavProps {
  setNavOpen: (prev: boolean) => void;
}

const MobileNav: FC<MobileNavProps> = ({ setNavOpen }) => {
  return (
    <>
      <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-primaryGray">
        <li className="py-6 text-4xl">
          <NavLink
            className={({ isActive }) => (isActive ? "text-primaryLime" : "")}
            onClick={() => setNavOpen(false)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink
            className={({ isActive }) => (isActive ? "text-primaryLime" : "")}
            onClick={() => setNavOpen(false)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink
            className={({ isActive }) => (isActive ? "text-primaryLime" : "")}
            onClick={() => setNavOpen(false)}
            to="/work"
          >
            My Work
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink
            className="pointer-events-none opacity-25"
            onClick={() => setNavOpen(false)}
            to="/content"
          >
            Content
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MobileNav;
