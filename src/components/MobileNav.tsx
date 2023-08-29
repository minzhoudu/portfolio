import { FC } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

interface MobileNavProps {}

const MobileNav: FC<MobileNavProps> = () => {
    const iconSize = 40;

    return (
        <>
            {/* Mobile menu */}
            <ul className="absolute top-0 left-0 w-full h-screen bg-primaryGray flex flex-col justify-center items-center">
                <li className="py-6 text-4xl">
                    <NavLink className={({ isActive }) => (isActive ? "text-primaryLime" : "")} to="/">
                        Home
                    </NavLink>
                </li>
                <li className="py-6 text-4xl">
                    <NavLink className={({ isActive }) => (isActive ? "text-primaryLime" : "")} to="/about">
                        About
                    </NavLink>
                </li>
                <li className="py-6 text-4xl">
                    <NavLink className={({ isActive }) => (isActive ? "text-primaryLime" : "")} to="/work">
                        My Work
                    </NavLink>
                </li>
                <li className="py-6 text-4xl">
                    <NavLink className={({ isActive }) => (isActive ? "text-primaryLime" : "")} to="content">
                        Content
                    </NavLink>
                </li>
            </ul>

            {/* Mobile social icons */}

            <div className="flex gap-x-16 fixed bottom-10 left-[50%] translate-x-[-50%]">
                <Link className="hover:opacity-50" to="">
                    <FaLinkedin size={iconSize} />
                </Link>

                <Link className="hover:opacity-50" to="">
                    <FaGithub size={iconSize} />
                </Link>

                <Link className="hover:opacity-50" to="">
                    <FaInstagram size={iconSize} />
                </Link>

                <Link className="hover:opacity-50" to="">
                    <FaLinkedin size={iconSize} />
                </Link>
            </div>
        </>
    );
};

export default MobileNav;
