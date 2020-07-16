import React from 'react';
import Home from './Home/components/Home'
import { useMediaPredicate } from "react-media-hook";

import './App.css';

function App() {
  const xsScreen = useMediaPredicate("(max-width: 375px)");
  const mdScreen = useMediaPredicate("(max-width: 768px)");
  const lgScreen = useMediaPredicate("(max-width: 1024px)");

  return <div className='backgroundImg'>
      <Home deviceSize={xsScreen ? "xs" : mdScreen ? "md" : lgScreen ? "lg" : "xl"}/>
    </div>
}

export default App;
