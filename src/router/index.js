import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Mainmenu, Musicplayer, MusikPanting, Tentang} from '../pages';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mainmenu"
        component={Mainmenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Musicplayer"
        component={Musicplayer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MusikPanting"
        component={MusikPanting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tentang"
        component={Tentang}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
