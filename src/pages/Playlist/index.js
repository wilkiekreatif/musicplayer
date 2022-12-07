import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Playlist = () => {
  return (
    <View style={style.latar}>
      <Text style={style.h1}>PLAYLIST MUSIK PANTING</Text>
      <View style={style.body}>
        <TouchableOpacity style={style.btn}>
          {/* <LinearGradient colors={['#eef2f3', '#8e9eab']}> */}
          <Text style={style.h2}>JUDUL LAGU</Text>
          <Text style={style.h3}>Penyanyi</Text>
          <Text style={style.h3}>Pencipta</Text>
          {/* </LinearGradient> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Playlist;

const style = StyleSheet.create({
  latar: {
    height: '100%',
    backgroundColor: '#2D3142',
    alignItems: 'center',
  },
  h1: {
    marginTop: 20,
    marginBottom: 20,
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  h2: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    height: '87%',
    width: '90%',
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 15,
    height: '15%',
    width: '98%',
  },
});
