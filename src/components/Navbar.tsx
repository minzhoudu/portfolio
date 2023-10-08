import { FC, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../assets/logo.png";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed flex h-[80px] w-full items-center justify-between bg-primaryGray px-4 text-white shadow-md shadow-black">
      <div>
        <img src={Logo} alt="PJ logo image" className="w-48" />
      </div>

      <div
        onClick={() => setNavOpen((prev) => !prev)}
        className="z-10 text-2xl lg:hidden"
      >
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      <DesktopNav />

      {navOpen && <MobileNav />}
    </nav>
  );
};

export default Navbar;
