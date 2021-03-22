import React, { Component } from 'react';
import { View,Text,StyleSheet ,TextInput, TouchableOpacity ,Image, ImageBackground ,TouchableHighlight} from 'react-native'; 
import firebase from './FireConnection';    
import IonIcons from 'ionicons/icons';
import Home from './Home';

export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state ={
            emailInput:'',
            senhaInput:'',

         }
         this.login = this.login.bind(this);
         this.back = this.back.bind(this);

         firebase.auth().signOut();
    }

    login() {
        if(this.state.emailInput != '' && this.state.senhaInput != '' ) {
            firebase.auth().onAuthStateChanged((usuarios)=> {
                if(usuarios) { 
                    this.props.navigation.navigate('Interna');
                }
            }); 
            firebase.auth().signInWithEmailAndPassword(
                this.state.emailInput, 
                this.state.senhaInput, 
            ).catch((error)=>{
                alert(error.code);
            })

        }   
    }
    back() {
        this.props.navigation.navigate('Home'); 
    }

    render(){
        return (
            <View style={styles.container}> 
                <ImageBackground style={styles.imagem} source={require('../assets/images/desert2.png')}>
                    <TouchableHighlight style={styles.voltar} onPress={this.back}>
                         <Text style={styles.voltarTxt}>Voltar</Text>
                    </TouchableHighlight> 
                </ImageBackground> 
                <View style={styles.area}>
                    <Text>Login</Text>
                    <TextInput onChangeText={(emailInput)=>this.setState({emailInput})} style={styles.input} placeholder="Digite seu e-mail" /> 
                    <TextInput secureTextEntry={true}  onChangeText={(senhaInput)=>this.setState({senhaInput})} style={styles.input} placeholder="Digite seu senha" /> 
                    <TouchableOpacity style={styles.button} onPress ={this.login}>
                        <Text style={styles.textBtn}>Login</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}     

const styles = StyleSheet.create( {
    container : {
        flex:1,  
    },
    input: {
        height:45,
        padding:10,
        marginTop:10,
        marginBottom:10,
        borderRadius:5,
        backgroundColor: "#fff"
    },
    area: { 
        margin:10 
    },
    button: {
     height:45,
     backgroundColor:"#f25c10",
     borderRadius:5,
     justifyContent:"center"
    },
    textBtn: {
        fontWeight:"bold",
        textAlign:"center",
        color:"#fff"
    },
    imagem: {
        height:300,
        width:null, 
    },
    voltar: {
        justifyContent:"center",
        backgroundColor:"#f25c10",
        width:100,
        height:40,
        borderRadius:5,
        marginTop:30, marginLeft:10,
        alignItems:"center"
    },
    voltarTxt: {
        fontWeight:"bold",
        color:"#fff"
    }
})