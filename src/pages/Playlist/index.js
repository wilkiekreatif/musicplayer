import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainBtn from './MainBtn';

const Playlist = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={style.latar}>
      <Text style={style.h1}>PLAYLIST MUSIK PANTING</Text>
      <View style={style.body}>
        <ScrollView>
          <MainBtn
            title="RUHUI RAHAYU"
            singer="Fataya Putri Cinta Ariyanto Abdur dan Miranty Karima"
            // songwriter="Muhammad Marwan, S.Pd"
            onPress={() => handleGoTo('Musicplayer')}
          />
          <MainBtn
            title="AWAL BAMULA"
            singer="Fataya Putri Cinta Ariyanto Abdur dan Miranty Karima"
            // songwriter="Muhammad Marwan, S.Pd"
            onPress={() => handleGoTo('Musicplayer')}
          />
          <MainBtn
            title="BAHIBUR DIRI"
            singer="Fataya Putri Cinta Ariyanto Abdur dan Miranty Karima"
            // songwriter="Muhammad Marwan, S.Pd"
            onPress={() => handleGoTo('Musicplayer')}
          />
          <MainBtn
            title="BATURAI NYANYI"
            singer="Fataya Putri Cinta Ariyanto Abdur dan Miranty Karima"
            // songwriter="Muhammad Marwan, S.Pd"
            onPress={() => handleGoTo('Musicplayer')}
          />
          <MainBtn
            title="BARASA RASA"
            singer="Fataya Putri Cinta Ariyanto Abdur dan Miranty Karima"
            // songwriter="Muhammad Marwan, S.Pd"
            onPress={() => handleGoTo('Musicplayer')}
          />
          <MainBtn
            title="DITIWAS JADI"
            singer="Fataya Putri Cinta Ariyanto Abdur dan Miranty Karima"
            // songwriter="Muhammad Marwan, S.Pd"
            onPress={() => handleGoTo('Musicplayer')}
          />
          <MainBtn
            title="SUDAH JANJINYA"
            singer="Fataya Putri Cinta Ariyanto Abdur dan Miranty Karima"
            // songwriter="Muhammad Marwan, S.Pd"
            onPress={() => handleGoTo('Musicplayer')}
          />
        </ScrollView>
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
  body: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    borderRadius: 15,
    height: '87%',
    width: '90%',
    marginBottom: 20,
    // alignItems: 'center',
  },
  btn: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 15,
    height: '100%',
    width: '100%',
  },
});
