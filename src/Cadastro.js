import React, { Component } from 'react';
import { View,Text,StyleSheet ,TextInput, TouchableOpacity,ImageBackground,TouchableHighlight } from 'react-native'; 
import firebase from './FireConnection';

export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state ={
            emailInput:'', 
            senhaInput:'',

         }
         this.cadastrar = this.cadastrar.bind(this);
         this.back = this.back.bind(this);
         firebase.auth().signOut();
    }

    cadastrar() {
        if(this.state.emailInput != '' && this.state.senhaInput != '' ) {
            firebase.auth().onAuthStateChanged((user)=> {
                if(user) {
                    let uid = user.uid;
                    firebase.database().ref('usuarios').child(uid).set ({
                        saldo:0
                    });
                    this.props.navigation.navigate('Interna');
                }
            });
            firebase.auth().createUserWithEmailAndPassword(
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
                <ImageBackground style={styles.imagem} source={require('../assets/images/desert.png')}>
                    <TouchableHighlight style={styles.voltar} onPress={this.back}>
                         <Text style={styles.voltarTxt}>Voltar</Text>
                    </TouchableHighlight> 
                </ImageBackground> 
                <View style={styles.area}>
                    <Text> Inscreva-se</Text>
                    <TextInput onChangeText={(emailInput)=>this.setState({emailInput})} style={styles.input} placeholder="Digite um e-mail" /> 
                    <TextInput secureTextEntry={true}  onChangeText={(senhaInput)=>this.setState({senhaInput})} style={styles.input} placeholder="Digite uma senha" /> 
                    
                    <TouchableOpacity style={styles.button} onPress ={this.cadastrar}>
                        <Text style={styles.textBtn}>Cadastrar</Text>
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
    imagem: {
        height:300,
        width:null, 
    },
    area: { 
        margin:10 
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
    },
    input: {
        height:45,
        padding:10,
        marginTop:10,
        marginBottom:10,
        borderRadius:5,
        backgroundColor: "#fff"
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
    }
})