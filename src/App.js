import React from 'react';
import Home from './Home/components/Home';
import { useMediaPredicate } from 'react-media-hook';
import { createUseStyles } from 'react-jss';
import GoogleFontLoader from 'react-google-font-loader';
import {
    LOGO,
    BACKGROUND,
    SOCIAL_LINKS,
    LINK_GROUP_1,
    TITLE,
    PROFILE_PIC,
} from './assets/usersData/RazorRamon/data';
import { Helmet } from 'react-helmet';
import './App.css';

const useStyles = createUseStyles({
    root: {
        height: `100%`,
    },
    backgroundImg: {
        'background-image': `url(${
            BACKGROUND.image ? BACKGROUND.imageLink : ''
        })`,
        'background-repeat': 'no-repeat',
        'background-position': '50% 45%',
        'background-attachment': 'fixed',
        'background-size': 'contain',
    },
    //  'background-color': `${BACKGROUND.color}`
});

const linkGroups = [LINK_GROUP_1];

const App = () => {
    const xsScreen = useMediaPredicate('(max-width: 430px)');
    const mdScreen = useMediaPredicate('(max-width: 768px)');
    const lgScreen = useMediaPredicate('(max-width: 1024px)');
    const classes = useStyles();

    return (
        <div className={BACKGROUND.image ? classes.backgroundImg : ''}>
            {console.log('window Width', window.innerWidth)}
            <Helmet>
                <title>Right-Link</title>
                <style>
                    {`
              .RLgradient {
                ${BACKGROUND.color}
               }
                .root {
                    height: 100%;
                    overflow-x: hidden;
                }
            `}
                </style>
            </Helmet>
            <GoogleFontLoader
                fonts={[
                    {
                        font: LINK_GROUP_1.groupFont,
                        weights: [400],
                    },
                ]}
            />
            <Home
                deviceSize={
                    xsScreen ? 'xs' : mdScreen ? 'md' : lgScreen ? 'lg' : 'xl'
                }
                socialLinks={SOCIAL_LINKS}
                profileTitle={TITLE}
                profileImage={PROFILE_PIC}
                linkGroups={linkGroups}
                logo={LOGO}
                customFont={LINK_GROUP_1.groupFont}
            />
        </div>
    );
};

export default App;
