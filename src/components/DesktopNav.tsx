import { FC } from "react";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface DesktopNavProps {}

const DesktopNav: FC<DesktopNavProps> = () => {
  return (
    <>
      {/* Menu */}
      <ul className="hidden text-xl lg:flex">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-primaryLime" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-primaryLime" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-primaryLime" : "")}
            to="/work"
          >
            My Work
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-primaryLime" : "")}
            to="/content"
          >
            Content
          </NavLink>
        </li>
      </ul>

      {/* Social icons */}
    </>
  );
};

export default DesktopNav;
