import React, { FC, useState } from "react";
import Link from "next/link";

import {
  SearchIcon,
  StrokeIcon,
  InboxIcons,
  TaskIcon,
} from "../../common/customIcons";
import Inbox from "./components/Inbox";
import Task from "./components/Task";

const ContainerHome: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showTask, setShowTask] = useState(false);

  const handleSwitchIcon = () => {
    setIsExpanded(!isExpanded);
  };
  const handleShowChat = () => {
    if (setShowChat) {
      setShowChat(!showChat);
      setShowTask(false);
    }
  };
  const handleShowTask = () => {
    if (setShowTask) {
      setShowTask(!showTask);
      setShowChat(false);
    }
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

      <button
        type="button"
        onClick={handleSwitchIcon}
        className="fixed bottom-5 right-5 "
      >
        <div className="bg-[#2F80ED] py-[15px] px-[20px] rounded-full">
          <StrokeIcon />
        </div>
      </button>
      {isExpanded ? (
        <>
          <div className="fixed bottom-28 right-7 ">
            {showChat ? <Inbox /> : null}
            {showTask ? <Task /> : null}
          </div>
          <div className="fixed bottom-5 right-[90px]">
            <p className="mb-3 text-white text-sm text-center">Inbox</p>
            <button
              type="button"
              className="bg-white py-[11px] px-[12px] rounded-full"
              onClick={handleShowChat}
            >
              <InboxIcons color="text-[#8885FF]" />
            </button>
          </div>
          <div className="fixed bottom-5 right-[150px]">
            <p className="mb-3 text-white text-sm text-center">Task</p>
            <button
              className="bg-white py-[11px] px-[12px] rounded-full"
              onClick={handleShowTask}
            >
              <TaskIcon color="text-[#F8B76B]" />
            </button>
          </div>
        </>
      ) : (
        <div />
      )}
    </section>
  );
};
export default ContainerHome;
