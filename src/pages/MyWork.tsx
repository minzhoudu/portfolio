import { FC } from "react";
import WorkComponent from "../components/WorkComponent";

interface MyWorkProps {}

const MyWork: FC<MyWorkProps> = () => {
  return (
    <main className="flex w-full flex-col items-center bg-primaryGray pt-20 lg:pb-10">
      <div className="py-32 text-7xl text-white">
        <h1>
          My <span className="rounded-lg bg-primaryLime-dark px-5">Work</span>
        </h1>
      </div>

      <WorkComponent />
    </main>
  );
};

export default MyWork;
