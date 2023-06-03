import React from 'react';
import Home from './Home/components/Home';
import { useMediaPredicate } from 'react-media-hook';
import GoogleFontLoader from 'react-google-font-loader';
import { SOCIAL_LINKS, LINK_GROUPS, PROFILE } from './assets/usersData/PierreR';
import { Helmet } from 'react-helmet';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

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
                    PROFILE.background.imageLink
                        ? PROFILE.background.imageLink
                        : PROFILE.background.color
                        ? PROFILE.background.color
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
            {LINK_GROUPS.map(
                (link) =>
                    link.groupFont && (
                        <GoogleFontLoader
                            fonts={[
                                {
                                    font: link.groupFont,
                                    weights: [400],
                                },
                            ]}
                        />
                    )
            )}
            <Home
                deviceSize={
                    xsScreen ? 'xs' : mdScreen ? 'md' : lgScreen ? 'lg' : 'xl'
                }
                socialLinks={SOCIAL_LINKS}
                linkGroups={LINK_GROUPS}
                profile={PROFILE}
            />
        </div>
    );
};

export default App;
