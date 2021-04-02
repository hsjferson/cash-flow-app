import { timeSharp } from 'ionicons/icons';
import React, { Component } from 'react';
import { View,Text,StyleSheet, ImageBackground, TextInput, TouchableOpacity, Button, } from 'react-native';   
import { Value } from 'react-native-reanimated';
import firebase from './FireConnection'; 

import HistoricoItem from './HistoricoItem';  
export default class AddReceita extends Component {
    constructor(props) {
        super(props);
        this.state= { 
            valor:'' 
        } 
        this.add = this.add.bind(this);
    }
    add() {
        if(this.state.valor != '') { 

            //atualizando historico  
            let historico = firebase.database().ref('historico')
                .child(firebase.auth().currentUser.uid); 

            let user = firebase.database().ref('usuarios')
                .child(firebase.auth().currentUser.uid);

            
            //Add historico
            let key = historico.push().key;

            historico.child(key).set({
                type:'Receita',
                valor: this.state.valor , 
            }) 

             
            //currentUser (selecionar usuario atua)
            //onde (pega uma unica vez) 
            //alterando saldo 
            user.once('value').then((snapshot)=>{

                    let saldo = parseFloat(snapshot.val().saldo)  ; 
                    saldo += parseFloat(this.state.valor);

                    user.set({
                        saldo:saldo
                        
                    })  
                    alert("Adicionado com Sucesso!");
 
 

                 })  
                  
        }
         
    } 
       
    render(){
        return (
            <ImageBackground style={styles.imagemBg} source={require('../assets/images/10924456.png')}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=> {
                        this.props.navigation.navigate('Interna');
                    }} >
                        <Text>Voltar</Text>
                    </TouchableOpacity>
                    <View style={styles.area}>
                        <Text  style={styles.text}>Quanto voçe quer adicionar? </Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={this.state.valor}
                            placeholder={"0"}
                            onChangeText={(valor)=>this.setState({valor})} 
                        />  
                         <TouchableOpacity style={styles.button} onPress={this.add}>
                             <Text style={styles.textBtn}>Adicionar</Text>
                         </TouchableOpacity>
                    </View>
                     
                </View>
            </ImageBackground>
        )
    }
}     

const styles = StyleSheet.create( {
    imagemBg : {
        flex:1, 
    },
    container: {
        flex:1,
        justifyContent:"center", 
        margin:10
    },
    area: {
        marginTop:200,   
    }, 
    text: {
        fontWeight:"bold",
        fontSize:25,
        color:"#ffff"
    },
    input: { 
        textAlign:"center",
        fontSize:100,
        height:200,
        padding:10,
        marginTop:10,
        marginBottom:10,
        borderRadius:5, 
    },
    button: {
        height:45,
        backgroundColor:"#53d67f",
        borderRadius:5,
        justifyContent:"center"
       },
    textBtn: {
        fontWeight:"bold",
        textAlign:"center",
        fontSize:17,
        color:"#fff", 
        alignContent:"center"
    },
})