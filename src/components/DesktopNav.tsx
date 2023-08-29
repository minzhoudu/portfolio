import { FC } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

interface DesktopNavProps {}

const DesktopNav: FC<DesktopNavProps> = () => {
    return (
        <>
            {/* Menu */}
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>My Work</li>
                <li>Content</li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-x-16 fixed bottom-10 left-[50%] translate-x-[-50%]">
                <a className="hover:opacity-50" href="/">
                    <FaLinkedin size={50} />
                </a>

                <a className="hover:opacity-50" href="/">
                    <FaGithub size={50} />
                </a>

                <a className="hover:opacity-50" href="/">
                    <FaInstagram size={50} />
                </a>

                <a className="hover:opacity-50" href="/">
                    <FaLinkedin size={50} />
                </a>
            </div>
        </>
    );
};

export default DesktopNav;
