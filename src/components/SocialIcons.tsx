import { FC } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

interface SocialIconsProps {}

const SocialIcons: FC<SocialIconsProps> = () => {
  return (
    <div className="flex justify-center gap-12 pb-7">
      <a
        href="https://github.com/minzhoudu"
        target="_blank"
        className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
      >
        <FaGithub className="text-4xl text-white hover:text-primaryLime" />
      </a>

      <a
        href="https://www.instagram.com/p.jjovanovic/"
        target="_blank"
        className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
      >
        <FaInstagram className="text-4xl text-white hover:text-primaryLime" />
      </a>

      <a
        href="https://www.linkedin.com/in/jovanovixp/"
        target="_blank"
        className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
      >
        <FaLinkedin className="text-4xl text-white hover:text-primaryLime" />
      </a>
    </div>
  );
};

export default SocialIcons;
