import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MainBtn = ({title, singer, songwriter, onPress}) => {
  return (
    <TouchableOpacity style={style.mainbtn} onPress={onPress}>
      <LinearGradient colors={['#396afc', '#2D3142']} style={style.btnstyle}>
        <Text style={style.btnfont}>{title}</Text>
        <Text style={style.h2}>{singer}</Text>
        {/* <Text style={style.h2}>{songwriter}</Text> */}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MainBtn;

const style = StyleSheet.create({
  mainbtn: {
    // backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 3,
    // borderRadius: 15,
    // margin: 10,
    // marginRight: 10,
    // borderRadius: 50,
  },
  btnstyle: {
    borderRadius: 10,
    padding: 15,
    marginTop: 5,
    // flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  h2: {
    color: '#ccd9d8',
    paddingLeft: 13,
    fontSize: 13,
    fontWeight: 'bold',
  },
  btnfont: {
    color: 'white',
    // marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  logo: {
    margin: 5,
  },
});
