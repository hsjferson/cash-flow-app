import React, { Component } from 'react';
import { View,Text,StyleSheet, ImageBackground,TouchableHighlight } from 'react-native'; 

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state ={ }

        this.cadastrar  = this.cadastrar.bind(this);
        this.login = this.login.bind(this);
    }


    cadastrar() {
        this.props.navigation.navigate('Cadastro');
    }

    login() {
        this.props.navigation.navigate('Login');
    }

    render(){

        return (
            <ImageBackground source={require('../assets/images/10924456.png')} style={styles.imagembg}>
                <View style={styles.container}>
                    <Text style={styles.title}></Text>
                    <View>
                        <TouchableHighlight onPress={this.cadastrar}  style={styles.button} underlayColor="#f27537">
                            <Text style={styles.textBtn}>Cadastrar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.login}   style={styles.button} underlayColor="#f27537">
                             <Text style={styles.textBtn}>Login</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}     

const styles = StyleSheet.create( {
     
    imagembg: {
     flex:1, 
     width:null, 
     
    },
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title: {
        fontWeight:'bold',
        fontSize:30,
        color:"#555"
    },
    button: {
        height:50,
        width:350,
        backgroundColor:"#f25c10",
        margin:10,
        alignItems:"center",
        justifyContent:"center"  ,
        borderRadius:5
    },
    textBtn: {
        fontWeight:"bold",
        color:"#fff" 
    }
})