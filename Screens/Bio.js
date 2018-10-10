import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
      <Image style={{width:40, height:70}}
      source={require('./FB.png')}/>
      <Text style={styles.logoText}>Welcome to My Apps.</Text>
      <TextInput 
      style={styles.inputBox} 
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder="Email"
      placeholderTextColor="#ffffff"
      />
      <TextInput style={styles.inputBox} 
      placeholder="Password"
      placeholderTextColor="#ffffff"
      secureTextEntry={true} //sandinya jadi titik-titik
      />
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Details')}>
          <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity >
      <Text style={styles.instructions}>Lupa Kata Sandi?</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#455a64"
  },
  logoText :{
    marginVertical: 15,
    fontSize:16,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  inputBox: {
    width:300,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 13,
    color:'#ffffff',
    marginVertical: 10,
  },

  button:{
    width:300,    
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12
  },

  buttonText:{
    fontSize: 16,
    fontWeight: '500',
    color:'#ffffff',
    textAlign: "center",
    
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 5,
  },
})

class DetailsScreen extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>BIODATA!</Text>
            <Text style={styles.instructions}>Nama : Tri Aji Sektiantoro</Text>
            <Text style={styles.instructions}>Kelas : XI RPL 4</Text>
            <Text style={styles.instructions}>No Absen : 32</Text>
            <Image 
          style={{width:300, height:200}} 
          source ={require('./me.jpg')} />
          </View>
        )}
}
  const RootStack = StackNavigator ({
      Home : HomeScreen,
      Details : DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component{
    render(){
        return <RootStack/>;
    }
}