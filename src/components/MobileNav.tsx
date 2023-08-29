import { FC } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

interface MobileNavProps {}

const MobileNav: FC<MobileNavProps> = () => {
    return (
        <>
            {/* Mobile menu */}
            <ul className="absolute top-0 left-0 w-full h-screen bg-primaryGray flex flex-col justify-center items-center">
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">My Work</li>
                <li className="py-6 text-4xl">Content</li>
            </ul>

            {/* Mobile social icons */}

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

export default MobileNav;
