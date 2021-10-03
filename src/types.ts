export type TDataLogged = {
    photoProfile: string;
    isOpened: boolean;
    username: string;
}

export type TDataStories = Array<{
    photoProfile: string;
    isOpened: boolean;
    username: string;
}>

export type TDataFeed = Array<{
    photoProfile: string;
    isLike: boolean;
    isSave: boolean;
    username: string;
    description: string;
    photo: string;
    totalComment: number;
    totalLike: number;
}>

export interface ICardFeed {
    photoProfile: string;
    isLike: boolean;
    isSave: boolean;
    username: string;
    description: string;
    photo: string;
    totalComment: number;
    totalLike: number;
}