import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// class cc extends Component{
//     render(){
//         return(
//            <Text>{this.props.listname}</Text> 
//         );
//     }
// }
export default class adminView extends Component{
   render(){
       return(
        <View style={{flex:1}}>

            <View style={{flex:2, backgroundColor:'#2FD5CF', justifyContent:'flex-end'}}>
                <Text style={{paddingLeft:20, fontWeight:'bold' }}>Administration
                <Text style={{color:'white'}}>                                                                                                  ></Text>
                </Text>
            </View>

            <View style={{flex:8, backgroundColor:'#ecf0f1', paddingTop:20}}>
              
                
                    <View style={{borderTopWidth:0.5, borderColor:'#dff9fb'}}>
                        <Text style={styles.it1}>Danh sách sản phẩm
                            <Text style={{color:'black'}}>                                                                                      ></Text>
                        </Text>
                    </View>    

                    <View style={{borderTopWidth:0.5, borderColor:'#dff9fb'}}>
                        <Text style={styles.it2}>Danh sách hoá đơn
                        <Text style={{color:'black'}}>                                                                                         ></Text>
                        </Text>
                    </View>
                
                <View style={{justifyContent:'center', alignItems:'center', marginTop:250}}>
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
