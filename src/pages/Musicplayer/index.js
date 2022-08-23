import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
// import Ionicons from 'react-native-vector-icons';
import Slider from '@react-native-community/slider';

const {width, height} = Dimensions.get('window');

const Musicplayer = () => {
  return (
    <View style={style.container}>
      <View style={style.maincontainer}>
        <Text style={style.judul}>KUMPULAN MUSIK PANTING</Text>
        {/* LIRIK */}
        <View style={style.lirik}>{/* isi lirik */}</View>

        {/* Info Lagu */}
        <View style={{alignItems: 'center'}}>
          <Text style={style.title}>JUDUL LAGU</Text>
          <Text style={style.artist}>Penyanyi</Text>
          <Text style={style.artist}>Cipt:</Text>
        </View>
        {/* SLIDER  */}
        <Slider
          style={style.progressbar}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#EF8354"
          maximumTrackTintColor="#FFF"
          thumbTintColor="#EF8354"
          onSlidingComplete={() => {}}
        />
        {/* Durasi Progress */}
        <View style={style.progressLevelDuration}>
          <Text style={style.progressLabelText}>00:00</Text>
          <Text style={style.progressLabelText}>00:00</Text>
        </View>
        {/* MUSIC CONTROL */}
        <View style={style.musicControlContainer}>
          <TouchableOpacity onPress={() => {}}>
            {/* Previous */}
            {/* <Ionicons name="play-skip-back-outline" size={35} color="white" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={style.playpause}>
            {/* Start/Pause */}
          </TouchableOpacity>
          <TouchableOpacity style={style.next}>{/* Next */}</TouchableOpacity>
        </View>
      </View>
      {/* <View style={style.latar}>
        <View style={style.lirik}>
          <Text style={style.h2}>LIRIK LAGU</Text>
        </View>
        <View style={style.btn}>
        </View>
      </View> */}
    </View>
  );
};

export default Musicplayer;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D3142',
  },
  maincontainer: {
    alignItems: 'center',
    height: '100%',
  },
  latar: {
    height: '100%',
    backgroundColor: '#2D3142',
  },
  judul: {
    marginTop: 20,
    // marginBottom: 10,
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    color: '#EF8354',
    fontSize: 18,
  },
  artist: {
    color: '#FFF',
    fontSize: 15,
    marginTop: 5,
  },
  lirik: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 15,
    height: '60%',
    width: '90%',
  },
  progressbar: {
    // backgroundColor: 'green',
    width: '95%',
    height: 40,
    marginTop: 20,
    flexDirection: 'row',
  },
  progressLevelDuration: {
    width: '85%',
    // marginLeft: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: 'white',
    fontWeight: '15',
  },
});
