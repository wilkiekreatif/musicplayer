import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from '../../assets/png/icon.png';
import MainBtn from './MainBtn';
import Icon1 from '../../assets/png/icon1.png';
import Icon2 from '../../assets/png/icon2.png';
import Icon3 from '../../assets/png/icon3.png';

const Mainmenu = () => {
  return (
    <View style={style.latar}>
      <View style={style.header}>
        <Image source={Icon} style={style.icon} />
        <Text style={style.fontcolor1}>PANTING MUSIC PLAYER</Text>
        <MainBtn
          title="TENTANG MUSIK PANTING"
          image={Icon1}
          // onPress={() => handleGoTo('')}
        />
        <MainBtn
          title="KUMPULAN MUSIK PANTING"
          image={Icon2}
          // onPress={() => handleGoTo('')}
        />
        <MainBtn
          title="TENTANG PEMBUAT"
          image={Icon3}
          // onPress={() => handleGoTo('')}
        />
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
    fontSize: 25,
    marginBottom: 50,
  },
  header: {
    alignItems: 'center',
    height: 190,
  },
  icon: {
    marginBottom: 20,
    marginTop: '20%',
    weight: '40%',
    resizeMode: 'contain',
  },
});
