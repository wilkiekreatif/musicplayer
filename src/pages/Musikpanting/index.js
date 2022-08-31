import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';

const source = {uri: 'bundle-assets://tentangmusikpanting.pdf'};

const Mainmenu = () => {
  return (
    <View style={style.latar}>
      <Text style={style.h1}>MENGENAL KESENIAN MUSIK PANTING</Text>
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
          style={style.pdf}
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
    height: '87%',
    width: '90%',
    // padding: -10,
  },
  pdf: {
    borderRadius: 50,
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
  },
  icon: {
    marginTop: '-20%',
    marginBottom: '5%',
    resizeMode: 'contain',
  },
});
