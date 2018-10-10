



import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View,  Image} from 'react-native';
import Judul from './Components/Judul';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Judul title="BIODATA"/>

      
      <Image 
      style={{width:300, height:200}} 
      source ={require('./me.png')} />
        <Text style={styles.welcome}>HAI HAI!</Text>
        <Text style={styles.instructions}>Nama :Tri Aji Sektiantoro</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 4</Text>
        <Text style={styles.instructions}>No Absen : 32</Text>

      </View>
    )
  }






  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32fcc7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#04048e',
  },
  instructions: {
    textAlign: 'center',
    color: '#04048e',
    marginBottom: 5,
  },
}
);