export const TITLE = "Pierre Randall"
export const PROFILE_PIC = "https://res.cloudinary.com/rightlink/image/upload/v1595178893/PierreR/Profile_gjsvbm.jpg"
export const BACKGROUND = {
    image: false,
    imageLink: '',
    color: 'white',
}
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
            featuredColor: "",
            pinned: true,
            mainMedia: {},
            additionalLinks: [],  
            color: "green",
            colored: false,
            buttonColor: "",
            bannerSide: "left",
        },
        {
            name: "My Portfolio",
            link: "https://www.rightclickrva.com",
            linkSpaced: true,
            type: "external",
            typeAction: "",
            internal: false,
            featured: false,
            featuredText: "",
            featuredTimerDate: "",
            featuredTimerText: "",
            featuredColor: "", 
            pinned: false,
            mainMedia: {},
            additionalLinks: [],
            color: "blue",
            colored: false,
            buttonColor: "",
            bannerSide: "left",
        },
        {
            name: "View My Resume",
            link: "https://drive.google.com/file/d/1dMXecxJVIeuqIdfaalDJtlW8hbd_y9I-/view?usp=sharing",
            linkSpaced: true,
            type: "external",
            typeAction: "download",
            internal: false,
            featured: false,
            featuredText: "",
            featuredTimerDate: "",
            featuredTimerText: "",
            featuredColor: "",
            pinned: false, 
            mainMedia: {},
            additionalLinks: [],
            color: "red",
            colored: false,
            buttonColor: "",
            bannerSide: "left",
        },
    ]
}

export const LINK_GROUP_2 = {
    groupName: "Demo Links",
    groupColor: "red",
    group: [{
            name: "Basic Banner",
            link: "",
            linkSpaced: true,
            type: "internal",
            typeAction: "",
            internal: true,
            featured: true,
            featuredText: "New Banner",
            featuredTimerDate: "",
            featuredTimerText: "",
            featuredColor: "red",
            pinned: false,
            mainMedia: {
                type: "still",
                link: "https://res.cloudinary.com/rightlink/image/upload/v1595189055/PierreR/image_ard339.png",
                mediaText: "Additional Links Below",
            },
            additionalLinks: [
                {
                    name: 'Tidal',
                    link: 'https://tidal.com'
                },                  {
                    name: 'Spotify',
                    link: 'https://spotify.com'
                },                  {
                    name: 'Apple Music',
                    link: 'https://music.apple.com'
                },                  {
                    name: 'Sound Cloud',
                    link: 'https://soundcloud.com'
                },                  {
                    name: 'Youtube',
                    link: 'https://youtube.com'
                },             
            ],
            color: "red",
            colored: false,
            buttonColor: "",
            bannerSide: "left",
        },
        {
            name: "Internal Media",
            link: "",
            linkSpaced: true,
            type: "internal",
            typeAction: "",
            internal: true,
            featured: false,
            featuredText: "", 
            featuredTimerDate: "",
            featuredTimerText: "",
            featuredColor: "",
            pinned: true,
            mainMedia: {
                type: "media",
                link: "https://www.youtube.com/watch?v=UfQHEpf2q8k",
                mediaText: "Great Cover ^^",
            },
            additionalLinks: [
                {
                    name: 'Tidal',
                    link: 'https://tidal.com'
                },
                {
                    name: 'Spotify',
                    link: 'https://open.spotify.com'
                },                {
                    name: 'Apple Music',
                    link: 'https://music.apple.com'
                },
            ],
            color: "black",
            colored: false,
            buttonColor: "",
            bannerSide: "left",
        },
        {
            name: "Countdown Banner",
            link: "https://unitedmasters.com/m/5e99d519a2ca6d196513ca76",
            linkSpaced: true,
            type: "internal",
            typeAction: "",
            internal: true,
            featured: true,
            featuredText: "New Content in ",
            featuredTimerDate: "2020-08-03T00:00:00",
            featuredTimerText: "Live now",
            featuredColor: "green",
            pinned: false,
            mainMedia: {
                type: "still",
                link: "https://res.cloudinary.com/rightlink/image/upload/v1595189055/PierreR/image_ard339.png",
                mediaText: "Stream Now",
            },
            additionalLinks: [],
            color: "green",
            colored: false,
            buttonColor: "",
            bannerSide: "left",
        },
        {
            name: "Attached 1 of 2",
            link: "",
            linkSpaced: false,
            type: "external",
            typeAction: "",
            internal: true,
            featured: false,
            featuredText: "", 
            featuredTimerDate: "",
            featuredTimerText: "", 
            featuredColor: "",
            pinned: false,
            mainMedia: {},
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
            color: "blue",
            colored: false,
            buttonColor: "",
            bannerSide: "left",
        },
        {
            name: "Attached 2 of 2",
            link: "",
            linkSpaced: true,
            type: "external",
            typeAction: "",
            internal: true,
            featured: false,
            featuredText: "", 
            featuredTimerDate: "",
            featuredTimerText: "", 
            featuredColor: "",
            pinned: false,
            mainMedia: {},
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
            color: "blue",
            colored: false,
            buttonColor: "",
            bannerSide: "left",
        },
        {
            name: "Button Color",
            link: "",
            linkSpaced: true,
            type: "external",
            typeAction: "",
            internal: true,
            featured: false,
            featuredText: "", 
            featuredTimerDate: "",
            featuredTimerText: "", 
            featuredColor: "",
            pinned: false,
            mainMedia: {},
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
            color: "green",
            colored: true,
            buttonColor: "green",
            bannerSide: "left",
        },
    ]
}
