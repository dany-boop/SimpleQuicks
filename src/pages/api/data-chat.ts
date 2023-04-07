import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ chat: [{
        id: 1,
        isGroup: true,
        groupName: "109220-Naturalization",
        date: "January 1, 2021",
        time: "19:10",
        currentUser: "Cameron Philips",
        from: null,
        isUnreadChat: true,
        currentChat: "Please check this out!",
      },
      {
        id: 2,
        isGroup: true,
        groupName:
          "Jeannette Moraima Guaman Chamba (Hutto I-589) [Hutto Follow Up - Brief Service]",
        date: "02/06/2021",
        time: "10:45",
        currentUser: "Ellen",
        from: null,
        isUnreadChat: false,
        currentChat: "Hey, please read.",
      },
      {
        id: 3,
        isGroup: true,
        groupName: "8405-Diana SALAZAR MUNGUIA",
        date: "01/06/2021",
        time: "12:19",
        currentUser: "Cameron Philips",
        from: null,
        isUnreadChat: false,
        currentChat:
          "I understand your initial concerns and that very valid, Elizabeth. But you ...",
      },
      {
        id: 4,
        isGroup: false,
        groupName: null,
        date: "01/06/2021",
        time: "12:19",
        currentUser: null,
        from: "FastVisa Support",
        isUnreadChat: false,
        currentChat: "Hey there! Welcome to your inbox.",
      },] })
  }

// const dataChat = [
//     {
//       id: 1,
//       isGroup: true,
//       groupName: "109220-Naturalization",
//       date: "January 1, 2021",
//       time: "19:10",
//       currentUser: "Cameron Philips",
//       from: null,
//       isUnreadChat: true,
//       currentChat: "Please check this out!",
//     },
//     {
//       id: 2,
//       isGroup: true,
//       groupName:
//         "Jeannette Moraima Guaman Chamba (Hutto I-589) [Hutto Follow Up - Brief Service]",
//       date: "02/06/2021",
//       time: "10:45",
//       currentUser: "Ellen",
//       from: null,
//       isUnreadChat: false,
//       currentChat: "Hey, please read.",
//     },
//     {
//       id: 3,
//       isGroup: true,
//       groupName: "8405-Diana SALAZAR MUNGUIA",
//       date: "01/06/2021",
//       time: "12:19",
//       currentUser: "Cameron Philips",
//       from: null,
//       isUnreadChat: false,
//       currentChat:
//         "I understand your initial concerns and that very valid, Elizabeth. But you ...",
//     },
//     {
//       id: 4,
//       isGroup: false,
//       groupName: null,
//       date: "01/06/2021",
//       time: "12:19",
//       currentUser: null,
//       from: "FastVisa Support",
//       isUnreadChat: false,
//       currentChat: "Hey there! Welcome to your inbox.",
//     },
//   ];