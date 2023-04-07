export type Chat = {
    id: number;
    isGroup: boolean;
    groupName: string;
    date: string;
    time: string;
    currentUser: string;
    from: string | null;
    isUnreadChat: boolean;
    currentChat: string;
};