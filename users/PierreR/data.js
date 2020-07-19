export const TITLE = "P2P Rixh"
export const PROFILE_PIC = "https://res.cloudinary.com/rightlink/image/upload/v1595178893/PierreR/Profile_gjsvbm.jpg"
export const SOCIAL_LINKS = {
    group: [{
        name: "Instagram",
        iconName: "instagram",
        link: "https://www.instagram.com/__pierre9",
        color: "black",
    },
    {
        name: "Twitter",
        iconName: "twitter",
        link: "https://twitter.com/__pierre9",
        color: "black",
    },
    {
        name: "LinkedIn",
        iconName: "linkedin",
        link: "https://www.linkedin.com/in/pierre-randall-9a1517134",
        color: "black",
    },
    {
        name: "Github",
        iconName: "github",
        link: "https://github.com/VCUPierre",
        color: "black",
    },
]}

// featuredTimerDate formats inclued '2020-02-01T01:02:03' or milliseconds e.g 1580518923000 - documentation here https://github.com/ndresx/react-countdown
export const LINK_GROUP_1 = {
    groupName: "Pesonal Links",
    groupColor: "orange",
    group: [{
            name: "My Business",
            link: "https://www.rightclickrva.com/business",
            linkSpaced: true,
            type: "external",
            typeAction: "",
            internal: false,
            featured: false,
            featuredText: "",
            featuredTimerDate: "",
            featuredTimerText: "",
            pinned: true,
            mainMedia: {},
            additionalLinks: [],  
            color: "black",
            bannerSide: "left",
        },
        {
            name: "My Portfolio",
            link: "https://www.rightclickrva.com",
            linkSpaced: true,
            type: "external",
            typeAction: "",
            internal: false,
            featured: true,
            featuredText: "Coming Soon",
            featuredTimerDate: "",
            featuredTimerText: "", 
            pinned: false,
            mainMedia: {},
            additionalLinks: [],
            color: "green",
            bannerSide: "left",
        },
        {
            name: "Download My Resume",
            link: "",
            linkSpaced: true,
            type: "item",
            typeAction: "download",
            internal: false,
            featured: false,
            featuredText: "",
            featuredTimerDate: "",
            featuredTimerText: "",
            pinned: false, 
            mainMedia: {},
            additionalLinks: [],
            color: "black",
            bannerSide: "left",
        },
    ]
}

export const LINK_GROUP_2 = {
    groupName: "Demo Links",
    groupColor: "green",
    group: [{
            name: "Dreams",
            link: "https://unitedmasters.com/m/5ebb11fa6b55ac27c8e9cf67",
            linkSpaced: true,
            type: "internal",
            typeAction: "",
            internal: true,
            featured: true,
            featuredText: "New",
            featuredTimerDate: "",
            featuredTimerText: "",
            pinned: false,
            mainMedia: {
                type: "still",
                link: "https://res.cloudinary.com/rightlink/image/upload/v1591759506/p2pRich/dreams_kxxt8u.jpg",
                mediaText: "Stream Now",
            },
            additionalLinks: [
                {
                    name: 'Tidal',
                    link: 'https://tidal.com/browse/track/141418149'
                },
                {
                    name: 'Spotify',
                    link: 'https://open.spotify.com/track/1nLAyoBSRe65iUcntzVNZm?si=Y7AtFXYjTkq4RpxZuaj7lQ'
                },                {
                    name: 'Apple Music',
                    link: 'https://music.apple.com/us/album/dreams/1513044862?i=1513044863'
                },          
            ],
            color: "black",
            bannerSide: "left",
        },
        {
            name: "For No Reason",
            link: "https://unitedmasters.com/m/5ea05efe09cf41331487e756",
            linkSpaced: true,
            type: "internal",
            typeAction: "",
            internal: true,
            featured: false,
            featuredText: "", 
            featuredTimerDate: "",
            featuredTimerText: "",
            pinned: true,
            mainMedia: {
                type: "media",
                link: "https://soundcloud.com/p2prixh/for-no-reason",
                mediaText: "Stream Now",
            },
            additionalLinks: [
                {
                    name: 'Tidal',
                    link: 'https://tidal.com/browse/track/139863571'
                },
                {
                    name: 'Spotify',
                    link: 'https://open.spotify.com/track/1V2tDuges6H1HdhxL1svPZ?si=o2E-fzMdSh2mnzCmWwGurg'
                },                {
                    name: 'Apple Music',
                    link: 'https://music.apple.com/us/album/for-no-reason/1511178948?i=1511178949'
                },
            ],
            color: "black",
            bannerSide: "left",
        },
        {
            name: "4am in Richmond",
            link: "https://unitedmasters.com/m/5e99d519a2ca6d196513ca76",
            linkSpaced: true,
            type: "internal",
            typeAction: "",
            internal: true,
            featured: true,
            featuredText: "Video droping in ",
            featuredTimerDate: "2020-08-03T00:00:00",
            featuredTimerText: "Live now",  
            pinned: false,
            mainMedia: {
                type: "media",
                link: "https://soundcloud.com/p2prixh/4am-in-richmond-freestyle",
                mediaText: "Stream Now",
            },
            additionalLinks: [
                {
                    name: 'Tidal',
                    link: 'https://tidal.com/browse/track/137944614'
                },
                {
                    name: 'Spotify',
                    link: 'https://open.spotify.com/track/0YJwEIteHZvwq5pm2KNm6G?si=pponcmjgTga2qBQTfLgWBw'
                },
                {
                    name: 'Apple Music',
                    link: 'https://music.apple.com/us/album/4am-in-richmond/1508644950?i=1508644951'
                }
            ],
            color: "red",
            bannerSide: "left",
        },
        {
            name: "True Internal Link",
            link: "https://unitedmasters.com/m/5e99d519a2ca6d196513ca76",
            linkSpaced: true,
            type: "internal",
            typeAction: "",
            internal: true,
            featured: false,
            featuredText: "", 
            featuredTimerDate: "",
            featuredTimerText: "", 
            pinned: false,
            mainMedia: {
                type: "media",
                link: "https://www.youtube.com/watch?v=UfQHEpf2q8k",
                mediaText: "Stream Now",
            },
            additionalLinks: [
                {
                    name: 'Tidal',
                    link: 'https://tidal.com'
                },
                {
                    name: 'Spotify',
                    link: 'https://spotify.com'
                },                {
                    name: 'Apple Music',
                    link: 'https://applemusic.com'
                },                {
                    name: 'Sound Cloud',
                    link: 'https://soundcloud.com'
                },                {
                    name: 'Youtube',
                    link: 'https://youtube.com'
                },
            ],
            color: "black",
            bannerSide: "left",
        },
    ]
}