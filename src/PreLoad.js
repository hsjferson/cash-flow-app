import React, { Component } from 'react';
import { View,Text,StyleSheet,Image    } from 'react-native';  
import firebase from 'firebase';
 
 
export default class Preload extends Component {
    constructor(props) {
        super(props);
        this.state= {
            saldo:0,
            historico:''
        } 

        firebase.auth().onAuthStateChanged((user)=> {
            if(user) {
                this.props.navigation.navigate('Login');
            }else {
                this.props.navigation.navigate('Home');
            }
        })
 
    } 
    render(){
        return (
            <View style={styles.container}  >
                <Image style={styles.imagemBg} source={require('../assets/images/logo.jpg')}/> 
                {/*  <View style={styles.saldoArea}>
                    <View style={styles.area}>
                        <Text style={styles.saldo}>Seu saldo é R$: {this.state.saldo} </Text>
                    </View> 
                </View>
                */}
            </View>
        )
    }
}     

const styles = StyleSheet.create( {

    container: {
        flex:1,
        justifyContent:"center",  
        alignItems:"center",
        margin:10
    },
    imagemBg : { 
        justifyContent:"center",
        alignItems:"center",
        width:200,
        height:200
    }, 
    saldoArea: {
        height:300,
        backgroundColor:"#ccc"
    },
    area: {
        marginTop:200,
        alignItems:"center",    
    },
    saldo: {
        fontWeight:"bold",
        fontSize:20
    }
})