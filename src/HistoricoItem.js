 import React, {Component} from 'react'; 
import {View,Text,StyleSheet}  from 'react-native';


export default class HistoricoItem extends Component {
    constructor(props){
        super(props);

        let bg =  '#53d67f';

        if(this.props.data.type == 'Despesa') {
            bg = '#d65555'
        }
        this.state = { 
            bg: bg
        }
    }

    render() {
        return( 
            <View style= { styles.area}>
                <Text style= {[styles.text, {color: this.state.bg}]}>{this.props.data.type}</Text>  
                <Text style= {  [styles.text , {color: this.state.bg}]} >{this.props.data.valor} </Text>  
            </View>
        )
    }
}
const styles = StyleSheet.create( {
    area: {  
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    text: {
        fontWeight:"bold"
    }
})