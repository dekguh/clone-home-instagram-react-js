import { TDataFeed, TDataLogged, TDataStories } from './types'

export const dataLogged : TDataLogged = {
    photoProfile: '/images/profile/user1.png',
    username: 'greatworld12',
    isOpened: false
}

export const dataStories : TDataStories = [
    {
        photoProfile: '/images/profile/user2.png',
        username: 'whynotu99',
        isOpened: false
    },
    {
        photoProfile: '/images/profile/user3.png',
        username: 'sadfellas',
        isOpened: false
    },
    {
        photoProfile: '/images/profile/user4.png',
        username: 'acorxtrow111',
        isOpened: false
    },
    {
        photoProfile: '/images/profile/user5.png',
        username: 'greenderwolf',
        isOpened: false
    },
    {
        photoProfile: '/images/profile/user6.png',
        username: 'sadhyubin',
        isOpened: false
    }
]

export const dataFeed : TDataFeed = [
    {
        photoProfile: '/images/profile/user2.png',
        username: 'whynotu99',
        isLike: false,
        isSave: false,
        description: 'make world greater',
        totalComment: 21,
        totalLike: 128,
        photo: '/images/photo/photo1.jpg'
    },
    {
        photoProfile: '/images/profile/user3.png',
        username: 'sadfellas',
        isLike: false,
        isSave: false,
        description: 'simple garden',
        totalComment: 0,
        totalLike: 341,
        photo: '/images/photo/photo2.jpg'
    },
    {
        photoProfile: '/images/profile/user4.png',
        username: 'acorxtrow111',
        isLike: true,
        isSave: false,
        description: 'simple garden',
        totalComment: 238,
        totalLike: 1975,
        photo: '/images/photo/photo3.jpeg'
    },
]