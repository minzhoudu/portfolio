import { FC, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import Logo from "../assets/logo.png";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed z-10 flex h-[80px] w-full items-center justify-between bg-primaryGray px-4 text-white shadow-md shadow-black">
      <div className="w-48">
        <NavLink to="/">
          <img src={Logo} alt="PJ logo image" />
        </NavLink>
      </div>

      <div
        onClick={() => setNavOpen((prev) => !prev)}
        className="z-10 text-2xl lg:hidden"
      >
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      <DesktopNav />

      {navOpen && <MobileNav setNavOpen={setNavOpen} />}
    </nav>
  );
};

export default Navbar;
