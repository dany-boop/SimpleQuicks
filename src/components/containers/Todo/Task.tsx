import React, { FC, useState } from "react";
import Link from "next/link";

import {
  SearchIcon,
  StrokeIcon,
  InboxIcons,
  TaskIcon,
} from "@/components/common/customIcons";
import Task from "./components/Todo";

const ContainerTask: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSwitchIcon = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="max-w-full mx-auto bg-lala w-[1635px] h-[1022px]">
      <div className="fixed right-0 w-[500px] md:w-[800px] lg:w-[1200px]">
        <div className="flex items-center">
          <div className="absolute ml-5">
            <SearchIcon color="text-white" />
          </div>
          <input type="text" className="bg-grey w-full h-full p-5 text-white" />
        </div>
      </div>

      <div className="fixed bottom-28 right-5">
        <TaskIcon />
      </div>

      <button
        type="button"
        onClick={handleSwitchIcon}
        className="fixed bottom-5 right-5 "
      >
        <div className="bg-[#8885FF] py-[15px] px-[16px] rounded-full">
          <TaskIcon color="text-white" />
        </div>
      </button>

      {isExpanded ? (
        <>
          <Link href="/task" legacyBehavior>
            <a className="fixed bottom-4 right-20">
              <p className="mb-3 text-white text-sm text-center">Inbox</p>
              <InboxIcons />
            </a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="fixed bottom-5 right-36">
              <p className="mb-3 text-white text-sm text-center">Home</p>
              <div className="bg-[#2F80ED] py-[13px] px-[18px] rounded-full">
                <StrokeIcon />
              </div>
            </a>
          </Link>
        </>
      ) : (
        <div />
      )}
    </section>
  );
};
export default ContainerTask;
