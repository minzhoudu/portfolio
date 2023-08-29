import { FC, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../assets/logo.png";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primaryGray text-gray-300">
            <div>
                <img src={Logo} alt="PJ logo image" className="w-48" />
            </div>

            <div onClick={() => setNavOpen((prev) => !prev)} className="text-2xl md:hidden z-10">
                {navOpen ? <FaTimes /> : <FaBars />}
            </div>

            {navOpen ? <MobileNav /> : <DesktopNav />}
        </nav>
    );
};

export default Navbar;
 