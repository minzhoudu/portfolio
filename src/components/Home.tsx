import { FC } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { HiArrowNarrowRight } from "react-icons/hi";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return (
        <main className="bg-primaryGray w-full h-screen">
            <ul>
                <li>
                    <a className="hover:opacity-50" href="/">
                        <FaLinkedin size={50} />
                    </a>
                </li>
                <li>
                    <a className="hover:opacity-50" href="/">
                        <FaGithub size={50} />
                    </a>
                </li>
                <li>
                    <a className="hover:opacity-50" href="/">
                        <FaInstagram size={50} />
                    </a>
                </li>
            </ul>

            <section className="py-[15rem]">
                <h1>HI, MY NAME IS PAVLE</h1>
                <p>I'm a FullStack WebDeveloper</p>
            </section>
        </main>
    );
};

export default Home;
