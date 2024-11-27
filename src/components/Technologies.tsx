import { useState } from "react";
import { technologies } from "../data/technologies";
import { Modal } from "./modal";
import SingleTechnology from "./SingleTechnologyIcon";

const Technologies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [technologyID, setTechnologyID] = useState<string>("");

  const handleOnClose = () => {
    setIsModalOpen(false);
  };

  const handleOnTechnologyClick = (techId: string) => {
    setIsModalOpen(true);
    setTechnologyID(techId);
  };

  const clickedTechnology = technologies.find(
    (tech) => tech.id === technologyID,
  );

  return (
    <>
      <h3 className="pb-10 pt-20 font-semibold tracking-wider">Technologies</h3>
      <div className="relative h-44 overflow-hidden mask-gradientMask">
        {technologies.map((tech, index) => (
          <SingleTechnology
            tech={tech}
            index={index}
            key={index}
            onClick={handleOnTechnologyClick}
          />
        ))}

        <Modal
          isOpen={isModalOpen}
          onClose={handleOnClose}
          title={clickedTechnology?.name}
        >
          <p className="px-3">{clickedTechnology?.description}</p>
        </Modal>
      </div>
    </>
  );
};

export default Technologies;
