import React from 'react';
import Base from './base/Base';
import { useMediaPredicate } from 'react-media-hook';
import GoogleFontLoader from 'react-google-font-loader';
import {
    SOCIAL_LINKS,
    LINK_GROUPS,
    PROFILE,
} from './assets';
// import data from './assets/test.json';
import { Helmet } from 'react-helmet';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
    const xsScreen = useMediaPredicate('(max-width: 430px)');
    const mdScreen = useMediaPredicate('(max-width: 768px)');
    const lgScreen = useMediaPredicate('(max-width: 1024px)');

    // console.log('data', data);
    // const { SOCIAL_LINKS, LINK_GROUPS, PROFILE } = data;
    return (
        <div>
            <Helmet>
                <title>Right-Link</title>
                <style>
                    {`
              .RL-bg-img {
                ${
                    PROFILE.background.imageLink
                        ? PROFILE.background.imageLink
                        : PROFILE.background.color
                        ? PROFILE.background.color
                        : ''
                }
            }
                .RL-bg-size {
                ${
                    PROFILE.background.imageSize
                        ? PROFILE.background.imageSize
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
                (link, i) =>
                    link.groupFont && (
                        <GoogleFontLoader
                            key={`linkGroupFont-${i}`}
                            fonts={[
                                {
                                    font: link.groupFont,
                                    weights: [400],
                                },
                            ]}
                        />
                    )
            )}
            <Base
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
