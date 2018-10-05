import React, {Component} from 'react';
import {View , Text , StyleSheet , TextInput , Image , TouchableHighlight , Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ProfilePage from './App';

class Login extends Component {
	constructor(props) {

    super(props);

    this.state = {text: ''};
	this.state = {password: ''};

  }
  
  render(){
    return(
	<View style={styles.container} >
        <Image source={require('../img/logo.png')} style={{width: 150, height: 42}}/>
		<View style={styles.background} >
			<TextInput
				style={styles.input}
				placeholder="Email atau Nomor Telepon"
				multiline={false}
				autoCapitalize={'none'}
				maxLength={100}
				onChangeText={(text) => this.setState({text})}
				value={this.state.text}
			/>
		
			<TextInput
				style={styles.input2}
				placeholder="Password"
				multiline={false}
				maxLength={100}
				secureTextEntry={true}
				onChangeText={(password) => this.setState({password})}
				value={this.state.password}
			/>
		</View>
		<TouchableHighlight style={styles.button} onPress={()=> this.props.navigation.navigate('Profile')} >
         <Text style={styles.txtbutton}> Masuk </Text>
        </TouchableHighlight>
		<Text style={styles.footxt}> Lupa Password? </Text>
      </View>
	);	
  }
}

export default class App extends Component{
  render(){
	  return(
	  <AppStackNavigator />
	  );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Login
  },
  Profile: {
	  screen : ProfilePage
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
  },
  background: {
	marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
	borderRadius:10,
	borderColor: 'white',
	borderWidth: 1,
    justifyContent: 'center',
	alignItems: 'center',
	width: 320,
	height: 100,
	backgroundColor: '#fff',
  },
    footer: {
	marginTop: 100,
    justifyContent: 'center',
	alignItems: 'center',
	width: 320,
	height: 100,
	backgroundColor: '#3b5998',
  },
  input: {
	height: 45,
	width: 300,
	borderColor: 'white',
	borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input2: {
	height: 40,
	width: 300,
	borderColor: 'white',
	borderWidth: 0,
	borderBottomWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
	borderBottomColor: '#fff',
  },
    btn: {
	padding: 10,
    alignItems: 'center',
    backgroundColor: '#8b9dc3',
  },
  button: {
	width: 300,
	marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
	borderRadius:10,
    alignItems: 'center',
    backgroundColor: '#8b9dc3',
    padding: 10
  },
  txtbutton: {
	fontSize: 18,
	color: 'white',
  },
  footxt: {
	marginTop: 10,
	fontSize: 15,
	color: 'white',
  },
});