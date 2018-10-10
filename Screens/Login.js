import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component {
  render() {
    return(
      <View style={styles.container}>
      <Image 
      style={{width:70, height:50}}
      source={require('./FB.png')}
      />
      <TextInput 
      style={styles.inputBox}
      underlineColorAndroid='rgba(0,0,0,0)' 
      placeholder="Email"
      placeholderTextColor = "#ffffff"
      />
      <TextInput style={styles.inputBox} 
      placeholder="Password"
      secureTextEntry={true} //sandinya jadi titik-titik
      />
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>MASUK</Text>
      </TouchableOpacity>

      <TouchableOpacity >
      <Text>Forgot Password?</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize: 16,
    color:'#ffffff'
  },

  button:{
    width:250,    
    height: 40,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#',
    marginVertical: 10,
    paddingHorizontal: 80
    
  },

  buttonText:{
    fontSize: 13,
    color:'#ffffff',
    
  }
})