import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class adminView extends Component{
   render(){
       return(
        <View style={{flex:1}}>

            <View style={{flex:2, backgroundColor:'#2FD5CF', flexDirection:'row', justifyContent:'space-between', paddingTop:10}}>  
                    <Text style={{paddingLeft:20, fontWeight:'bold', paddingTop:95 }}>Administration</Text>
                    <TouchableOpacity>
                        <Text style={{color:'white', paddingRight:30, paddingTop:95, fontSize:15, fontWeight:'bold' }}>></Text>
                    </TouchableOpacity>
            </View>

            <View style={{flex:8, backgroundColor:'#ecf0f1', paddingTop:20}}>
              
                    <TouchableOpacity>
                        <View style={{borderTopWidth:0.5, borderColor:'#dff9fb'}}>
                            <Text style={styles.it1}>Danh sách sản phẩm</Text>
                        </View>    
                            <Text style={{color:'black', marginLeft:374, marginTop:-26, fontSize:15, fontWeight:'bold'}}>></Text>
                    </TouchableOpacity>
                

                    <TouchableOpacity>
                        <View style={{borderTopWidth:0.5, borderColor:'#dff9fb'}}>
                            <Text style={styles.it2}>Danh sách hoá đơn</Text>
                        </View>
                   
                            <Text style={{color:'black', marginLeft:374, marginTop:-25, fontSize:15, fontWeight:'bold'}}>></Text>
                    </TouchableOpacity>
                

                <View style={{justifyContent:'center', alignItems:'center', marginTop:390}}>
                    <Text style={{color:'#2FD5CF', fontWeight:'bold', fontSize:20}}>CANTEEN</Text>
                </View>
           </View>
        </View>
       )
   }
}
const styles = StyleSheet.create({
    it1:{
        color:'black',
        paddingLeft:20,
        paddingTop:2,
        paddingBottom:3,
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'#dff9fb',
        fontWeight:'bold',
        },

    it2:{
        color:'black',
        borderTopWidth:2,
        paddingLeft:20,
        paddingTop:1,
        paddingBottom:2,
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'#dff9fb',
        fontWeight:'bold',
        }
});
