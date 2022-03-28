import React from 'react';
import Home from './Home/components/Home';
import { useMediaPredicate } from 'react-media-hook';
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

const linkGroups = [LINK_GROUP_1];

const App = () => {
    const xsScreen = useMediaPredicate('(max-width: 430px)');
    const mdScreen = useMediaPredicate('(max-width: 768px)');
    const lgScreen = useMediaPredicate('(max-width: 1024px)');

    return (
        <div>
            {/* {console.log('window Width', window.innerWidth)} */}
            <Helmet>
                <title>Right-Link</title>
                <style>
                    {`
              .RLgradient {
                ${
                    BACKGROUND.imageLink
                        ? BACKGROUND.imageLink
                        : BACKGROUND.color
                        ? BACKGROUND.color
                        : ''
                }
               }
                .root {
                    height: 100%;
                    overflow-x: hidden;
                }
            `}
                </style>
            </Helmet>
            {LINK_GROUP_1.groupFont ? (
                <GoogleFontLoader
                    fonts={[
                        {
                            font: LINK_GROUP_1.groupFont,
                            weights: [400],
                        },
                    ]}
                />
            ) : (
                ''
            )}
            <Home
                deviceSize={
                    xsScreen ? 'xs' : mdScreen ? 'md' : lgScreen ? 'lg' : 'xl'
                }
                socialLinks={SOCIAL_LINKS}
                profileTitle={TITLE}
                profileImage={PROFILE_PIC}
                linkGroups={linkGroups}
                logo={LOGO}
                background={BACKGROUND}
                customFont={LINK_GROUP_1.groupFont}
            />
        </div>
    );
};

export default App;
