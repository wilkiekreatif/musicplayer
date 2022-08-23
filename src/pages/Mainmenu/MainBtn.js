import {Text, View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const MainBtn = ({title, image, onPress}) => {
  return (
    <TouchableOpacity style={style.mainbtn} onPress={onPress}>
      <View style={style.btnstyle}>
        <Image source={image} style={style.logo} />
        <Text style={style.btnfont}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainBtn;

const style = StyleSheet.create({
  mainbtn: {
    backgroundColor: '#fff',
    width: 300,
    paddingVertical: 3,
    borderRadius: 15,
    marginBottom: 15,
  },
  btnstyle: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnfont: {
    color: '#EF8354',
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
  },
});
