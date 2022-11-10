import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import Icon from '../../assets/png/music.png';
import MainBtn from './MainBtn';
import Icon1 from '../../assets/png/icon1.png';
import Icon2 from '../../assets/png/icon2.png';
import Icon3 from '../../assets/png/icon3.png';
// import decor from '../../assets/png/deco1.png';
import LinearGradient from 'react-native-linear-gradient';

const Mainmenu = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    // <View style={style.latar}>
    <LinearGradient colors={['#243B55', '#141E30']} style={style.latar}>
      <View style={style.header}>
        <Image source={Icon} style={style.icon} />
        <MainBtn
          title="TENTANG MUSIK PANTING"
          image={Icon1}
          onPress={() => handleGoTo('MusikPanting')}
        />
        <MainBtn
          title="KUMPULAN MUSIK PANTING"
          image={Icon2}
          onPress={() => handleGoTo('Musicplayer')}
        />
        <MainBtn
          title="TENTANG PEMBUAT"
          image={Icon3}
          onPress={() => handleGoTo('Tentang')}
        />
      </View>
      {/* <Image source={decor} style={style.icon1} /> */}
      {/* </View> */}
    </LinearGradient>
  );
};

export default Mainmenu;

const style = StyleSheet.create({
  latar: {
    flex: 1,
    // height: '100%',
    // backgroundColor: '#2D3142',
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
    marginBottom: 80,
    marginTop: '30%',
    weight: '40%',
    // resizeMode: 'contain',
  },
  icon1: {},
});
