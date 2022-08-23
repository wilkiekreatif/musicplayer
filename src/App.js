import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Mainmenu from './pages/Mainmenu';
import Splash from './pages/Splash';
import Musikpanting from './pages/Musikpanting';
import Musicplayer from './pages/Musicplayer';

export default function App() {
  return (
    <NavigationContainer>
      {/* <Mainmenu /> */}
      {/* <Musikpanting /> */}
      {/* <Splash /> */}
      <Musicplayer />
    </NavigationContainer>
  );
}
