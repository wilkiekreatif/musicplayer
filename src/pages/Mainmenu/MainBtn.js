import {Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MainBtn = ({title, image, onPress}) => {
  return (
    <TouchableOpacity style={style.mainbtn} onPress={onPress}>
      <LinearGradient colors={['#eef2f3', '#8e9eab']} style={style.btnstyle}>
        <Image source={image} style={style.logo} />
        <Text style={style.btnfont}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MainBtn;

const style = StyleSheet.create({
  mainbtn: {
    // backgroundColor: '#fff',
    width: 300,
    paddingVertical: 3,
    // borderRadius: 15,
    marginBottom: 15,
    // borderRadius: 50,
  },
  btnstyle: {
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnfont: {
    color: '#EF8354',
    marginLeft: 20,
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
  },
  logo: {
    margin: 5,
  },
});
