import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
      <Image 
      style={{width:70, height:50}}
      source={require('./FB.png')}
      />
      <TextInput 
      style={styles.inputBox} 
      placeholder="Email atau Nomor Telepon"
      />
      <TextInput style={styles.inputBox} 
      placeholder="Password"
      secureTextEntry={true} //sandinya jadi titik-titik
      />
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Details')}>
          <Text style={styles.buttonText}>MASUK</Text>
      </TouchableOpacity>

      <TouchableOpacity >
      <Text>Lupa Kata Sandi?</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width:250,
    fontSize: 13,
    color:'#000000'
  },

  button:{
    width:250,    
    height: 40,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#3B5998',
    marginVertical: 10,
    paddingHorizontal: 80
    
  },

  buttonText:{
    fontSize: 13,
    color:'#f7f7f7',
    
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
})

class DetailsScreen extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>BIODATA!</Text>
            <Text style={styles.instructions}>Nama : Zahrotun Mirna Nisa</Text>
            <Text style={styles.instructions}>Kelas : XI RPL 4</Text>
            <Text style={styles.instructions}>No Absen : 37</Text>
            <Image 
          style={{width:300, height:200}} 
          source ={require('./me.png')} />
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