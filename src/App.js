import React from 'react';
import Home from './Home/components/Home'
import { useMediaPredicate } from "react-media-hook";
import {createUseStyles} from 'react-jss'
import { LOGO, BACKGROUND, SOCIAL_LINKS, LINK_GROUP_1, TITLE, PROFILE_PIC } from './assets/usersData/PierreR/data'
import { Helmet } from 'react-helmet'

const useStyles = createUseStyles({
  backgroundImg: {
    'background-image': `url(${BACKGROUND.image ? BACKGROUND.imageLink : ""})`,
    'background-repeat': 'no-repeat',
    'background-position': '50% 45%',
    'background-attachment': 'fixed',
    'background-size': 'contain',
  },
  //  'background-color': `${BACKGROUND.color}`
})

const linkGroups = [
  LINK_GROUP_1,
];

const App = () => {
  const xsScreen = useMediaPredicate("(max-width: 415px)");
  const mdScreen = useMediaPredicate("(max-width: 768px)");
  const lgScreen = useMediaPredicate("(max-width: 1024px)");
  const classes = useStyles()

  return <div className={classes.backgroundImg}>
      <Helmet>
        <title>Right-Link</title>
        <style>
            {`
              .RLgradient {
                ${BACKGROUND.color} 
               }
            `}
        </style>
      </Helmet>
      <Home 
        deviceSize={xsScreen ? "xs" : mdScreen ? "md" : lgScreen ? "lg" : "xl"}
        socialLinks={SOCIAL_LINKS}
        profileTitle={TITLE}
        profileImage={PROFILE_PIC}
        linkGroups={linkGroups}
        logo={LOGO}
        />
    </div>
}

export default App;
