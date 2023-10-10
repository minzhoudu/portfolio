import { FC } from "react";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface DesktopNavProps {}

const DesktopNav: FC<DesktopNavProps> = () => {
  const activeStyle = "font-bold text-primaryLime underline underline-offset-4";

  return (
    <>
      <ul className="hidden text-xl lg:flex">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="pointer-events-none opacity-25" to="/work">
            My Work
          </NavLink>
        </li>
        <li>
          <NavLink className="pointer-events-none opacity-25" to="/content">
            Content
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default DesktopNav;
