import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import songs from '../../model/data';
import TrackPlayer, {
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

// Menentukan lebar layar otomatis
const {width} = Dimensions.get('window');
// menginisiasi Track Player
const setUpPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(songs);
  } catch (error) {
    console.log(error);
  }
};

// Memfungsikan Play dan Pause
const togglePlayback = async playbackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();

  if (currentTrack != null) {
    if (playbackState == State.Playing) {
      // console.log(
      //   `currentTrack ${currentTrack}, playbackState ${playbackState}, State.Paused ${State.Paused}`,
      // );
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  }
};

const Musicplayer = () => {
  const playbackState = usePlaybackState();
  const progress = useProgress();
  const [songIndex, setsongIndex] = useState(0);
  const [repeatMode, setRepeatMode] = useState('off');
  const [trackTitle, setTrackTitle] = useState();
  const [trackArtist, setTrackArtist] = useState();
  const [trackCreated, setTrackCreated] = useState();
  const [trackArtwork, setTrackArtwork] = useState();

  //untuk membuat judul,artist dan pencipta lagu berganti otomatis mengikuti lirik
  const scrollX = useRef(new Animated.Value(0)).current;

  // Fungsi Song Slider
  const songSlider = useRef(null); //Flatlist references

  // ganti lagu saat next / previous saat selesai
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artwork, artist, created} = track;
      setTrackArtwork(artwork);
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackCreated(created);
    }
  });

  const repeatIcon = () => {
    if (repeatMode == 'off') {
      return 'repeat-off';
    }
    if (repeatMode == 'track') {
      return 'repeat-once';
    }
    if (repeatMode == 'repeat') {
      return 'repeat';
    }
  };

  const changeRepeatMode = () => {
    if (repeatMode == 'off') {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode('track');
    }
    if (repeatMode == 'track') {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode('repeat');
    }
    if (repeatMode == 'repeat') {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode('off');
    }
  };

  const skipTo = async TrackId => {
    await TrackPlayer.skip(TrackId);
  };

  useEffect(() => {
    setUpPlayer();
    scrollX.addListener(({value}) => {
      // rconsole.log(`ScrollX: ${value} | Device width: ${ width}`);
      const index = Math.round(value / width);
      skipTo(index);
      setsongIndex(index);
      // console.log(index);
    });
    return () => {
      scrollX.removeAllListeners();
      // TrackPlayer.destroy();
    };
  });

  // Skip ke lagu selanjutnya
  const skipToNext = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };

  const skipToPrev = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  // Rendersong untuk Flatlist
  const renderSongs = ({item, index}) => {
    return (
      <Animated.View style={style.mainImageWrapper}>
        <ScrollView style={style.imageWrapper}>
          <Image source={trackArtwork} style={style.musicImage} />
        </ScrollView>
      </Animated.View>
    );
  };
  return (
    <SafeAreaView style={style.container}>
      <View style={style.judulWrapper}>
        <Text style={style.judul}>WILKIE MUSIC PLAYER</Text>
        {/* <Text style={style.judul}>PANTING MUSIC PLAYER</Text> */}
      </View>
      <View style={style.maincontainer}>
        {/* Lyric */}
        <Animated.FlatList
          ref={songSlider}
          renderItem={renderSongs}
          data={songs}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: scrollX},
                },
              },
            ],
            {useNativeDriver: true},
          )}
        />
        {/* Song Content */}
        <View>
          <Text style={[style.songContent, style.songTitle]}>{trackTitle}</Text>
          <Text style={[style.songContent, style.songArtist]}>
            {trackArtist}
          </Text>
          <Text style={[style.songContent, style.songArtist]}>
            Cipt: {trackCreated}
          </Text>
        </View>

        {/* Slider */}
        <View>
          <Slider
            style={style.progressbar}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor="#EF8354"
            minimumTrackTintColor="#fff"
            maximumTrackTintColor="gray"
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
          />
        </View>

        {/* music Progress Duration */}
        <View style={style.progressLevelDuration}>
          <Text style={style.progressLabelText}>
            {new Date(progress.position * 1000)
              .toLocaleTimeString()
              .substring(3)}
          </Text>
          <Text style={style.progressLabelText}>
            {new Date((progress.duration - progress.position) * 1000)
              .toLocaleTimeString()
              .substring(3)}
          </Text>
        </View>
        {/* Controls */}
        <View style={style.musicControlContainer}>
          <TouchableOpacity onPress={skipToPrev}>
            <Ionicons name="play-skip-back-outline" size={30} color="#EF8354" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglePlayback(playbackState)}>
            <Ionicons
              name={
                playbackState === State.Playing
                  ? 'ios-pause-circle'
                  : 'ios-play-circle'
              }
              size={75}
              color="#EF8354"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToNext}>
            <Ionicons
              name="play-skip-forward-outline"
              size={30}
              color="#EF8354"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.bottomcontainer}>
        <View style={style.bottomIconWrapper}>
          <TouchableOpacity
            onPress={() => {
              // TrackPlayer.pause();
              alert('Tombol Share');
            }}>
            <Ionicons name="md-share-social-outline" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={changeRepeatMode}>
            <MaterialCommunityIcons
              name={`${repeatIcon()}`}
              size={25}
              color={repeatMode !== 'off' ? 'white' : 'gray'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('Tombol Playlist');
            }}>
            <Ionicons name="menu-outline" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Musicplayer;

const style = StyleSheet.create({
  judulWrapper: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  judul: {
    color: '#EF8354',
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#2D3142',
  },
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomcontainer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopColor: '#393e46',
    borderWidth: 1,
  },
  bottomIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  mainImageWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '75%',
    height: '100%',
    resizeMode: 'contain',
    // margin: 25,
    // backgroundColor: 'blue',
  },
  musicImage: {
    width: '100%',
  },
  scrollLirik: {
    width: 300,
    height: 300,
  },
  elevation: {
    elevation: 5,
    shadowColor: '#ccc',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  songContent: {
    textAlign: 'center',
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EF8354',
  },
  songArtist: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#EEE',
  },
  progressbar: {
    width: 350,
    height: 30,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLevelDuration: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  musicControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
});
