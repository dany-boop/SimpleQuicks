import React, { FC, useState, useEffect } from "react";

import { Chat } from "@/types/chat";
import {
  GroupChatIcon,
  PersonIcon,
  LoadingIcons,
  SearchIcon,
} from "@/components/common/customIcons";

const Inbox: FC = () => {
  const [dataChat, setDataChat] = useState<Chat[] | any>([]);

  useEffect(() => {
    setTimeout(() => {
      const getDataChat = async () => {
        const res = await fetch("http://localhost:3000/api/data-chat");
        const data = res.json();

        return setDataChat(await data);
      };
      getDataChat();
    }, 1500);
  }, []);

  return (
    <div className="bg-white w-[550px] h-[550px] pt-5 rounded-sm">
      {/* Search */}
      <div className="w-full px-7">
        <div className="flex w-full items-center">
          <input
            type="text"
            id="Search"
            className="border border-grey text-black rounded w-full pl-2.5"
            placeholder="Search"
            required
          />
          <div className="absolute right-10">
            <SearchIcon />
          </div>
        </div>
      </div>
      {/* Search End */}

      {/* Chat Here */}
      <div className="w-full px-4 my-7">
        {!dataChat.chat ? (
          <div className="flex flex-col items-center justify-center my-40">
            <div className="animate-spin mb-2">
              <LoadingIcons />
            </div>
            Loading...
          </div>
        ) : (
          dataChat?.chat?.map((item: Chat) => (
            <div className="my-4" key={item.id}>
              {item.isGroup ? (
                <div className="w-full flex items-start border-b-2 pb-4">
                  <div className="mt-3">
                    <GroupChatIcon />
                  </div>

                  <div className="ml-2 flex flex-col">
                    {/* Group Chat Name */}
                    <div className="flex items-center">
                      <h1 className="text-blue-500 font-semibold text-md max-w-md">
                        {item.groupName}
                      </h1>

                      <p className="ml-5 items-end font-light text-xs">
                        {item.date}
                      </p>
                      <p className="ml-1 font-light text-xs">{item.time}</p>
                    </div>
                    {/* Group Chat Name End Recent Chat */}
                    <div className="flex flex-col ">
                      <h1 className="font-medium text-xs">
                        {item.currentUser} :
                      </h1>

                      <div className="flex items-center justify-between w-full">
                        <p className="text-xs">{item.currentChat}</p>

                        <div className="">
                          {item.isUnreadChat ? (
                            <div className="bg-orange-500 rounded-full p-1"></div>
                          ) : (
                            <div />
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Recent Chat End */}
                  </div>
                </div>
              ) : (
                <div className="w-full flex items-start border-b-2 pb-4 ml-3">
                  <PersonIcon />

                  <div className="ml-2 flex flex-col">
                    {/* Group Chat Name */}
                    <div className="flex items-center">
                      <h1 className="text-blue-500 font-semibold text-base text-md max-w-md">
                        {item.from}
                      </h1>

                      <p className="ml-5 items-end font-light text-xs ">
                        {item.date}
                      </p>
                      <p className="ml-5 items-end font-light text-xs">
                        {item.time}
                      </p>
                    </div>
                    {/* Group Chat Name End Recent Chat */}
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between w-full text-xs">
                        <p>{item.currentChat}</p>

                        {item.isUnreadChat ? (
                          <div className="bg-orange-500 rounded-full p-1"></div>
                        ) : (
                          <div />
                        )}
                      </div>
                    </div>
                    {/* Recent Chat End */}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      {/* Chat Here End */}
    </div>
  );
};

export default Inbox;
