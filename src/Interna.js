import React, { Component } from 'react';
import { View,Text,StyleSheet, ImageBackground, FlatList, TouchableOpacity,Image } from 'react-native';  
import firebase from 'firebase';  

 

import HistoricoItem from './HistoricoItem';  
 
export default class Interna extends Component {
    constructor(props) {
        super(props);
        this.state= {
            saldo:0,
            historico:[]
        }
        this.addReceita = this.addReceita.bind(this);
        this.addDispesa = this.addDispesa.bind(this);
        this.addSair = this.addSair.bind(this); 

         

        firebase.auth().onAuthStateChanged((user)=> {
            if(user) {
 
                firebase.database().ref('usuarios').child(user.uid).on('value', (snapshot)=> {
                    
                    let state = this.state;
                    state.saldo = snapshot.val().saldo;
                    this.setState(state);
                }) 
                firebase.database().ref('historico').child(user.uid).on('value', (snapshot)=> {

                    let state = this.state;
                    state.historico = [];

                    snapshot.forEach((chilItem)=>{
                        state.historico.push({
                            key:chilItem.key,  
                            type:chilItem.val().type,  
                            valor:chilItem.val().valor     
                        })
                    })
                    this.setState(state);
                });

            }else {
                this.props.navigation.navigate('Home');
            }
        })
 
    }
    addReceita() {
        this.props.navigation.navigate('AddReceita'); 
    }
    addDispesa() {
        this.props.navigation.navigate('AddDespesa'); 
    }
    addSair() {
        firebase.auth().signOut();
    }
    render(){  //  10924456 {this.state.saldo}
        return (
            <ImageBackground style={styles.imagemBg} source={require('../assets/images/10924456.png')}>
                 
                <View style={styles.userArea}>
                             
                </View>
                 
                <View style={styles.container}> 
                    <View style={styles.valor}>
                            <Text style={styles.numberTitle}>O valor atual de sua conta é de:</Text> 
                            <Text style={styles.number}>R$: {this.state.saldo}</Text>  
                    </View>
                     
                    <View style={styles.area}>
                        <Text style={styles.saldo}>Historico completo de seu caixa</Text>
                    </View>
                    <FlatList 
                        style={styles.historico}
                        data={this.state.historico}
                        renderItem={({item}) => <HistoricoItem data={item} />  }
                    />  
                    <TouchableOpacity onPress={this.addReceita} style={styles.button}>
                        <Text style={styles.textBtn}>Adicionar Receita</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.addDispesa}  style={styles.button}>
                       <Text  style={styles.textBtn}>Adicionar Despesa</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={this.addSair}  style={[styles.button, {backgroundColor:'#fff'}   ]}>
                       <Text  style={[styles.textBtn, {color:"#777"}]}>Sair</Text>
                   </TouchableOpacity> 
                </View>
            </ImageBackground>
        )
    }
}     

const styles = StyleSheet.create( {
    imagemBg : {
        flex:1, 
    },
    imagemUser: {
        flex:1, 
        width:"100%"
    },
    container: {
        flex:1,
        justifyContent:"center", 
        margin:10
    },
    valor: {
        justifyContent:"center",
        alignContent:"center",
    },
    numberTitle: {
        color:"#fff",
        fontSize:17,
    },
    number: {
         fontSize:50,
         color:"#fff"
    },
    area: {
        marginTop:50,
        marginBottom:10,
        alignContent:"center",
        justifyContent:"center",    
        alignItems:"center",  
        backgroundColor:"#fff",
        borderRadius:50,
        height:50, 
        
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        }, 
        shadowRadius: 1.84,

        elevation: 10,
    },
    saldo: { 
        color:"#777",
        fontSize:16
    },
    historico: { 
        flex:1,
        borderRadius:5, 
        height:300,   
        backgroundColor: 'rgba(33, 33, 52, 2.2)',
    },
    button: {
        height:45,
        marginTop:5,
        marginBottom:5,
        backgroundColor:"#f25c10",
        borderRadius:5,
        justifyContent:"center"
    },
    textBtn: {
           fontWeight:"bold",
           textAlign:"center",
           color:"#fff"
    },
    userArea: {  
        height:100,
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        justifyContent:"center",
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        
    },
     
})