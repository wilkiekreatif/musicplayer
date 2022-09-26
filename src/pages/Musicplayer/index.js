import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import play from '../../assets/png/play.png';
import pause from '../../assets/png/pause.png';
import next from '../../assets/png/next.png';
import previous from '../../assets/png/previous.png';
import songs from '../../model/data';
import LinearGradient from 'react-native-linear-gradient';
import TrackPlayer, {State} from 'react-native-track-player';

const Musicplayer = () => {
  const state = async () => {
    await TrackPlayer.getState();
  };
  // Pembacaan Flatlist Lirik
  const renderSongs = ({item, index}) => {
    return (
      <View style={style.lirik}>
        <Text source={item.title} />
      </View>
    );
  };

  // Tampilan dan Fungsi Tombol
  return (
    <LinearGradient colors={['#243B55', '#141E30']} style={style.container}>
      <View style={style.maincontainer}>
        {/* <Text style={style.judul}>KUMPULAN MUSIK PANTING</Text> */}
        <Text style={style.judul}>WILKIE MUSIC PLAYER</Text>
        <View style={style.lyriccontainer}>
          {/* <WebView source={{uri: '../../assets/lirik/Bahiburdiri.html'}} /> */}
          <FlatList
            renderItem={renderSongs}
            data={songs}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={() => {}}
          />
        </View>
        {/* Info Lagu */}
        <View style={style.center}>
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
          <TouchableOpacity
            onPress={() => {
              alert('Tombol Previous');
            }}>
            {/* Previous */}
            <Image source={previous} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // alert('Tombol Play dan Pause');
            }}>
            {/* Start/Pause */}
            <Image source={play} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('Tombol Next');
            }}>
            {/* Next */}
            <Image source={next} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
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
    flex: 1,
    justifyContent: 'flex-end',
  },
  latar: {
    height: '100%',
    backgroundColor: '#2D3142',
  },
  center: {
    alignItems: 'center',
  },
  judul: {
    marginTop: 20,
    marginBottom: 20,
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    color: '#EF8354',
    fontSize: 18,
    marginTop: 10,
  },
  artist: {
    color: '#FFF',
    fontSize: 15,
    marginTop: 5,
  },
  lyriccontainer: {
    flex: 1,
    backgroundColor: 'green',
    width: '90%',
    padding: 15,
  },
  progressbar: {
    width: '95%',
    height: 40,
    marginTop: 20,
    flexDirection: 'row',
  },
  progressLevelDuration: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: 'white',
    fontWeight: '15',
  },
  musicControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    margin: 20,
  },
});
