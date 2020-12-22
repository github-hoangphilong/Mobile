import React, { Component } from 'react'
import {StyleSheet,View, Text, Picker, TextInput, TouchableOpacity, Image} from 'react-native'

export default class addFood extends Component {
    state = {
        choosenIndex: 0
    };
    render() {
        return (
            
            <View style={styles.container}>
            
                <View style={{flex:3, backgroundColor:'#dfe4ea'}}>
                <TouchableOpacity style={{backgroundColor:'#b2bec3',  marginTop:9, marginBottom:10, flex:1}}>
                    
                        <Image source={require('../../assets/9.png')} style={{marginLeft:170, marginTop:50}}/>
                    
                </TouchableOpacity>
                 </View>
            

                 <View style={{flex:7, backgroundColor:'white'}}>
                    <View style={{marginTop:20, marginLeft:20}}>
                         <Text style={{color:'black', fontSize:20}}>Mã:</Text>
                         <TextInput style={styles.textInput}></TextInput>
                    </View>

                    <View style={{marginTop:35, marginLeft:20}}>
                         <Text style={{color:'black', fontSize:20}}>Giá:</Text>
                         <TextInput style={styles.textInput}></TextInput>
                    </View>

                    <View style={{marginTop:35, marginLeft:20}}>
                         <Text style={{color:'black', fontSize:20}}>Tên:</Text>
                         <TextInput style={styles.textInput}></TextInput>
                    </View>
                    
                    <View style={{marginTop:35, marginLeft:20}}>
                         <Text style={{color:'black', fontSize:20}}>Loại sản phẩm:</Text>
                         <Picker style={styles.pickerStyle}
                            selectedValue={this.state.language}
                            color={this.state.language}
                            onValueChange={(itemValue, itemPosition) =>
                                this.setState({language: itemValue, choosenIndex: itemPosition})}
                         >
                            <Picker.Item label="Select a kind of product" value="Select" />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="React Native" value="rn" />
                         </Picker>
                    </View>

                   <TouchableOpacity style={styles.touchableOpacity}> 
                                <Text style={{textAlign:'center', fontFamily:"Copperplate"}}>Thêm</Text>
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
        width: "60%",
        marginLeft:134,
        marginTop:-24, 
    },

    textInput:{
         color:'black',
         height:'auto', 
         width:100, 
         borderBottomWidth:1,
         marginTop:-50,
         marginLeft:44,
         
    },

    touchableOpacity:{
        flex:1, 
        backgroundColor:'#81ecec', 
        justifyContent:'center', 
        marginTop:180, 
        borderRadius:20, 
        marginLeft:10, 
        marginRight:10,
        marginBottom:10,
    },
})