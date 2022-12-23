// Custom Colors = [RLGold,RLWhite]
/* social link custom colors {
   circle colors: [RLWhite]
   icon colors: [RLRed]
}*/
// if button is colored you must add a fontColor
// to change border color of a colored button add color to additionalstyles
export const PROFILE = {
    title: {
        title: '',
        color: '',
        font: '',
    },
    TRCLogo: 'colored',
    profilePic: '',
    background: {
        image: false,
        imageLink: '',
        color: 'background-image: linear-gradient(to right top, #00ff80, #00ffbb, #d5fbff, #d5fbff, #ffffff, #ffffff, #ffffff, #ffffff, #d5fbff, #d5fbff, #00ffbb, #00ff80)',
    },
};
export const SOCIAL_LINKS = {
    group: [
        {
            name: 'Instagram',
            iconName: 'instagram',
            link: 'https://instagram.com',
            color: '',
            inverted: true,
            secondaryColor: '',
            surrounded: 'circular',
            surroundedInColor: true,
        },
    ],
};
// featuredTimerDate formats inclued '2020-02-01T01:02:03' or milliseconds e.g 1580518923000 - documentation here https://github.com/ndresx/react-countdown
// for media as links you must set type as 'item' and mainMedia.type as either 'still, mp4, or other(not implemented yet)'
export const LINK_GROUPS = [
    {
        groupName: '',
        groupColor: '',
        groupFont: '',
        group: [
            {
                name: '',
                link: '',
                linkSpaced: true,
                type: '',
                typeAction: '',
                internal: false,
                featured: false,
                featuredText: '',
                featuredTimerDate: '',
                featuredTimerText: '',
                featuredColor: '',
                featuredAltStyle: '',
                pinned: false,
                mainMedia: {},
                additionalLinks: [],
                color: '',
                colorOveride: '',
                fontColor: '',
                colored: false,
                buttonColor: '',
                bannerSide: 'left',
                additionalStyle: 'longText',
                modalAlternativeText: {
                    removed: false,
                    text: '',
                },
            },
        ],
    },
];
