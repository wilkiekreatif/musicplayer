import {StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
// import Svg, {Use, Image} from 'react-native-svg';
import Icon from '../../assets/png/music.png';
import LinearGradient from 'react-native-linear-gradient';

const Mainmenu = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Mainmenu');
    }, 4000);
  });
  var Spinner = require('react-native-spinkit');

  const spin = {
    index: 0,
    types: [
      'CircleFlip',
      'Bounce',
      'Wave',
      'WanderingCubes',
      'Pulse',
      'ChasingDots',
      'ThreeBounce',
      'Circle',
      '9CubeGrid',
      'WordPress',
      'FadingCircle',
      'FadingCircleAlt',
      'Arc',
      'ArcAlt',
    ],
    size: 40,
    color: '#EF8354',
    isVisible: true,
  };
  return (
    <LinearGradient colors={['#243B55', '#141E30']} style={style.latar}>
      <Image source={Icon} style={style.icon} />
      {/* <Text style={style.fontcolor1}>PANTING</Text>
      <Text style={style.fontcolor1}>MUSIC PLAYER</Text> */}
      <Spinner
        style={style.spinner}
        isVisible={spin.isVisible}
        size={spin.size}
        type={'Circle'}
        color={spin.color}
      />
    </LinearGradient>
  );
};

export default Mainmenu;

const style = StyleSheet.create({
  latar: {
    flex: 1,
    // backgroundColor: '#2D3142',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    // marginTop: '-20%',
    // marginBottom: '5%',
    // resizeMode: 'contain',
  },
  spinner: {
    marginTop: 30,
  },
});
