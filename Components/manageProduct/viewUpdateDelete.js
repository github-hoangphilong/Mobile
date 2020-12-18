import React, { Component } from 'react'
import {StyleSheet,View, Text,Picker, TextInput, TouchableOpacity, Image} from 'react-native'

export default class viewUpdateDelete extends Component {
    

    render() {
        return (
            
            <View style={styles.container}>
            
                <View style={{flex:3, backgroundColor:'#dfe4ea'}}>
                <TouchableOpacity style={{backgroundColor:'#b2bec3',  marginTop:10, marginBottom:10, flex:1}}>   
                        <Image source={require('../../assets/download.jpeg')} style={{marginLeft:1, height:178, width: 400}}/>
                </TouchableOpacity>

                <View elevation={5} style={styles.it1}>
                    <Text style={{color:'black'}}>Cơm tấm</Text>
                </View>
                 </View>
            

                 <View style={{flex:7, backgroundColor:'white'}}>
                    <View style={{marginTop:20}}>
                         <Text style={{color:'black'}}> Mã:</Text>
                         <Text style={styles.text}>CT001</Text>
                    </View>

                    <View style={{marginTop:20}}>
                         <Text style={{color:'black'}}> Giá:</Text>
                         <Text style={styles.text}>20.000</Text>
                    </View>

                    <View style={{marginTop:20}}>
                         <Text style={{color:'black'}}> Tên:</Text>
                         <Text style={styles.text1}>Cơm tấm</Text>
                    </View>
                    
                    <View style={{marginTop:20}}>
                         <Text style={{color:'black'}}> Loại sản phẩm:</Text>
            
                         <Text style={{marginLeft:104, width:104, marginTop:-17, color:'black'}}>Món ăn</Text>
                    </View>

                   <TouchableOpacity style={{backgroundColor:'white', marginRight: 247, marginLeft:30, marginTop:270,width:250}}>
                       <Text style={{color:'black', fontFamily:"Copperplate"}}>Cập nhật</Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={{backgroundColor:'white', marginLeft:280, marginRight:30, marginTop:-18}}>
                       <Text style={{color:'black', fontFamily:"Copperplate"}}>Xoá</Text>
                   </TouchableOpacity>
                 </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create ({
     container: {
         flex: 1,
         alignItems:'stretch',
        
     },
    
    pickerStyle:{
        height: 24,
        width: "50%",
        backgroundColor:'#81ecec',
        
        borderRadius:50,
        borderWidth:-1,
        marginLeft:100,
        marginTop:-20,
        
    },

    text:{
          color:'black',
         marginTop:-17,
         marginLeft:31,
    },

    text1:{
        color:'black',
       marginTop:-17,
       marginLeft:33,
  },    

  it1:{
    borderRadius:10, 
    borderWidth:0.5, 
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    marginLeft:100,
    marginRight:100,
    height:70,
    marginBottom:5,
    shadowColor: '#000000',
       shadowOffset: {
         width: 0,
         height: 3
       },
       shadowRadius: 5,
       shadowOpacity: 1.0,
  },
})