import {
  Dimensions,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import fahri from '../../assets/png/Fahrian.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Menentukan lebar layar otomatis
const {width} = Dimensions.get('window');

const Tentang = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.judulWrapper}>
        <Text style={style.judul}>TENTANG PEMBUAT</Text>
        {/* <Text style={style.judul}>PANTING MUSIC PLAYER</Text> */}
      </View>
      <View style={style.maincontainer}>
        <View style={style.topWrapper}>
          <Image style={style.foto} source={fahri} />
          <View style={style.topinfo}>
            <View>
              <Text style={style.label}>Nama</Text>
              <Text style={style.label}>TTL</Text>
              <Text style={style.label}>Alamat</Text>
              <Text style={style.label} />
              <Text style={style.label}>Email</Text>
            </View>
            <View>
              <Text style={style.label}>:M. Fahrian Noor (Fahri)</Text>
              <Text style={style.label}>:Surabaya, 12 Mei 1996 </Text>
              <Text style={style.label}>
                :Komplek Surya Gemilang Banjarmasin
              </Text>
              <Text style={style.label}> Kalimantan Selatan</Text>
              <Text style={style.label}>:m20016@mhs.unesa.ac.id /</Text>
              <Text style={style.label}> fahriann2@gmail.com</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.pendidikan}>
        <Text style={style.label}>
          ~ PENDIDIKAN ============================
        </Text>
        <ScrollView style={style.scroll}>
          <Text style={style.label}>
            1. MDI Muhammadiyah 1-2 Banjarmasin (2002-2008)
          </Text>
          <Text style={style.label}>
            2. SMP Negeri 6 Banjarmasin (2008-2011)
          </Text>
          <Text style={style.label}>
            3. Ponpes Darul Hijrah Putra (2011-2013)
          </Text>
          <Text style={style.label}>
            4. MA Negeri 1 Banjarmasin (2013-2015)
          </Text>
          <Text style={style.label}>
            5. S1 Pendidikan Sendratasik Universitas Negeri Surabaya (2015-2019)
          </Text>
          <Text style={style.label}>
            6. S2 Pendidikan Seni Budaya Universitas Negeri Surabaya
            (2020-Sekarang)
          </Text>
        </ScrollView>
      </View>
      <View style={style.pengalaman}>
        <Text style={style.label}>
          ~ PENGALAMAN ===========================
        </Text>
        <ScrollView style={style.scroll}>
          <Text style={style.label}>
            1. Ketua Tablecoustic dalam penyambutan Gubernur Kalimantan Selatan
            di Darul Hijrah Putra (2012)
          </Text>
          <Text style={style.label}>
            2. Ketua ekstrakulikuler musik di MAN 1 Banjarmasin (2013-2014)
          </Text>
          <Text style={style.label}>
            3. Juara 1 Parade Band tingkat Kota Banjarmasin di IAIN Antasari
            (2013)
          </Text>
          <Text style={style.label}>
            4. Juara 1 Nasyid tingkat Kota Banjarmasin oleh KarTar Banua Anyar
            (2014)
          </Text>
          <Text style={style.label}>
            5. Juara 1 Musikalisasi Puisi tingkat Kota Banjarmasin oleh KarTar
            Banua Anyar (2014)
          </Text>
          <Text style={style.label}>
            6. Juara 3 Nasyid tingkat Provinsi di IAIN Antasari (2014)
          </Text>
          <Text style={style.label}>
            7. Anggota KKM Jrang-Jreng Ansambel Gitar UNESA (2015-2019)
          </Text>
          <Text style={style.label}>
            8. Player D’tik Art Production Repertoar Blaze Karya Laukhy (2016)
          </Text>
          <Text style={style.label}>
            9. Player D’tik Art Production Repertoar Puzzle karya Yanna Rahmat
            Pradana (2016)
          </Text>
          <Text style={style.label}>
            10. Sound Crew D’tik Art Production (2018)
          </Text>
          <Text style={style.label}>
            11. Player Mata Karya Production Repertoar Untuk Anakku Karya Afif
            Fadlul R. (2019)
          </Text>
        </ScrollView>
      </View>
      <View style={style.berkarya}>
        <Text style={style.label}>~ PENGALAMAN BERKARYA =================</Text>
        <ScrollView style={style.scroll}>
          <Text style={style.label}>
            1. Komposer Mars SMP Negeri 29 Surabaya (2018)
          </Text>
          <Text style={style.label}>
            2. Penulis buku berjudul Yuk Belajar Bermain Gitar (2019)
          </Text>
          <Text style={style.label}>
            3. Komposer Jingle Aneka Kue Lieha Banjarmasin (2020)
          </Text>
          <Text style={style.label}>
            4. Komposer Jingle SMK Krian 2 Sidoarjo (2022)
          </Text>
          <Text style={style.label}>
            5. Arranger Mars SMK Krian 2 Sidoarjo (2022)
          </Text>
          <Text style={style.label}>6. Founder belajaryuk.net (2022)</Text>
        </ScrollView>
      </View>
      <View style={style.bottomcontainer}>
        <View style={style.bottomIconWrapper}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.linkedin.com/in/wildan-auliana/');
            }}>
            <Ionicons name="logo-linkedin" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.youtube.com/c/IdanAulia');
            }}>
            <Ionicons name="logo-youtube" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.instagram.com/w.auliaabdillah');
            }}>
            <Ionicons name="logo-instagram" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tentang;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D3142',
  },
  judulWrapper: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  judul: {
    color: '#EF8354',
    fontWeight: 'bold',
    fontSize: 25,
  },
  pendidikan: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    flex: 1,
    // backgroundColor: 'blue',
  },
  pengalaman: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    flex: 1,
    // backgroundColor: 'green',
  },
  berkarya: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 20,
    flex: 1,
    // backgroundColor: 'red',
  },
  scroll: {
    marginTop: 5,
    marginLeft: 10,
    // marginBottom: 10,
  },
  topWrapper: {
    flexDirection: 'row',
    margin: 20,
    width: width,
  },
  foto: {
    height: 150,
    width: 100,
    borderRadius: 20,
  },
  topinfo: {
    flexDirection: 'row',
    paddingLeft: 15,
    height: 50,
    width: width - (20 + 150),
    color: 'white',
  },
  label: {color: 'white', fontSize: 10, marginRight: 10},
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
});
