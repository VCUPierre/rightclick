import React from 'react';
import Home from './Home/components/Home'
import { useMediaPredicate } from "react-media-hook";
import {createUseStyles} from 'react-jss'
import { BACKGROUND } from './assets/constants'
// import  { BACKGROUND } from './assets/data'
// import DarkModeToggle from './Home/components/DarkMode/DarkMode';
// import './styles.css';

const useStyles = createUseStyles({
  backgroundImg: {
    'background-image': `url(${BACKGROUND.image ? BACKGROUND.imageLink : ""})`,
    'background-repeat': 'no-repeat',
    'background-position': '50% 95%',
    'background-attachment': 'fixed',
    'background-size': 'contain',
  }
})
//  'background-color': `${BACKGROUND.color}`

const App = () => {
  const xsScreen = useMediaPredicate("(max-width: 375px)");
  const mdScreen = useMediaPredicate("(max-width: 768px)");
  const lgScreen = useMediaPredicate("(max-width: 1024px)");
  const classes = useStyles()

  return <div className={classes.backgroundImg}>
      {/* <DarkModeToggle /> */}
      <Home deviceSize={xsScreen ? "xs" : mdScreen ? "md" : lgScreen ? "lg" : "xl"}/>
    </div>
}

export default App;
