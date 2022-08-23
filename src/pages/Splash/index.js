import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
// import Svg, {Use, Image} from 'react-native-svg';
import Icon from '../../assets/png/music.png';

const Mainmenu = () => {
  return (
    <View style={style.latar}>
      <View style={style.header}>
        <Image source={Icon} style={style.icon} />
        <Text style={style.fontcolor1}>PANTING</Text>
        <Text style={style.fontcolor1}>MUSIC PLAYER</Text>
      </View>
    </View>
  );
};

export default Mainmenu;

const style = StyleSheet.create({
  latar: {
    height: '100%',
    backgroundColor: '#2D3142',
  },
  fontcolor1: {
    color: '#EF8354',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: -13,
  },
  header: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 190,
  },
  icon: {
    marginTop: '-20%',
    marginBottom: '5%',
    resizeMode: 'contain',
  },
});
