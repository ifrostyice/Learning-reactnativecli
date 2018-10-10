import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
    render(){
        return (
            <Text style={salon.judul}
            >{this.props.title}</Text>

        )
    }
}

const salon = {
    judul:{
        color: '#fff',
        fontSize: 50,
        justifyContent:'center',
        textAlign: 'center',
        backgroundColor:'#000000'
    }
}

export default Judul; 