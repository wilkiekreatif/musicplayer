import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';
import Icon from '../../assets/png/music.png';
// import sourcepdf from '../../assets/pdf/tentangmusikpanting.pdf';

const source = {uri: 'assets://tentangmusikpanting.pdf'};
// const source = {
//   uri: 'https://wildanauliana.rsintanhusada.com/pdf/kls7.pdf',
//   cache: true,
// };

const Mainmenu = () => {
  return (
    <View style={style.latar}>
      <Text style={style.h1}>TENTANG MUSIK PANTING</Text>
      <View style={style.body}>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={style.body}
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
    borderRadius: 15,
    height: '80%',
    width: '90%',
  },
  icon: {
    marginTop: '-20%',
    marginBottom: '5%',
    resizeMode: 'contain',
  },
});
