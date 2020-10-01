// Custom Colors = [RLGold,RLWhite]
/* social link custom colors {
   circle colors: [RLWhite]
   icon colors: [RLRed] 
}*/
// if button is colored you must add a fontColor
// to change border color of a colored button add color to additionalstyles
export const TITLE = {
    title: "",
    color: ""
}
export const LOGO = "colored"
export const PROFILE_PIC = ""
export const BACKGROUND = {
    image: false,
    imageLink: '',
    color: '',
}
export const SOCIAL_LINKS = {
    group: [{
        name: "Instagram",
        iconName: "instagram",
        link: "https://instagram.com",
        color: "",
        secondaryColor: "",
        surrounded: "circular",
        surroundedInColor: true,
    },
]}
// featuredTimerDate formats inclued '2020-02-01T01:02:03' or milliseconds e.g 1580518923000 - documentation here https://github.com/ndresx/react-countdown
// for media as links you must set type as 'item' and mainMedia.type as either 'still, mp4, or other(not implemented yet)'
export const LINK_GROUP_1 = {
    groupName: "",
    groupColor: "",
    group: [{
            name: "",
            link: "",
            linkSpaced: true,
            type: "",
            typeAction: "",
            internal: false,
            featured: false,
            featuredText: "",
            featuredTimerDate: "",
            featuredTimerText: "",
            featuredColor: "",
            featuredAltStyle: "",
            pinned: false,
            mainMedia: {},
            additionalLinks: [],  
            color: "",
            colorOveride: "",
            fontColor: "",
            colored: false,
            buttonColor: "",
            bannerSide: "left",
            additionalStyle: "longText",
            modalAlternativeText: {
                removed: false,
                text: "",
            }, 
        },
    ]
}

