import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
// import Splash from './pages/Splash';

export default function App() {
  return (
    <NavigationContainer>
      {/* <Splash /> */}
      <Router />
    </NavigationContainer>
  );
}
