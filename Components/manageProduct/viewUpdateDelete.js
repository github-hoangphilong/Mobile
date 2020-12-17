import React, { Component } from 'react'
import {StyleSheet,View, Text,Picker, TextInput, TouchableOpacity, Image} from 'react-native'

export default class viewUpdateDelete extends Component {
    state = {
        choosenIndex: 0
    };

    render() {
        return (
            
            <View style={styles.container}>
            
                <View style={{flex:3, backgroundColor:'#dfe4ea'}}>
                <TouchableOpacity style={{backgroundColor:'#b2bec3',  marginTop:10, marginBottom:10, flex:1}}>
                    
                        <Image source={require('../../assets/camera.png')} style={{marginLeft:130, marginTop:45}}/>
                    
                </TouchableOpacity>
                 </View>
            

                 <View style={{flex:7, backgroundColor:'white'}}>
                    <View style={{marginTop:20}}>
                         <Text style={{color:'black'}}> Mã:</Text>
                         <TextInput style={styles.textInput}></TextInput>
                    </View>

                    <View style={{marginTop:20}}>
                         <Text style={{color:'black'}}> Giá:</Text>
                         <TextInput style={styles.textInput}></TextInput>
                    </View>

                    <View style={{marginTop:20}}>
                         <Text style={{color:'black'}}> Tên:</Text>
                         <TextInput style={styles.textInput}></TextInput>
                    </View>
                    
                    <View style={{marginTop:20}}>
                         <Text style={{color:'black'}}> Loại sản phẩm:</Text>
                         {/* <Picker style={styles.pickerStyle}
                            selectedValue={this.state.language}
                            color={this.state.language}
                            onValueChange={(itemValue, itemPosition) =>
                                this.setState({language: itemValue, choosenIndex: itemPosition})}
                         >
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="React Native" value="rn" />
                         </Picker> */}
                         <TextInput style={{marginLeft:104, borderBottomWidth:1, width:104, marginTop:-18}}></TextInput>
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

    textInput:{
         color:'black',
         height:'auto', 
         width:100, 
         borderBottomWidth:1,
         marginTop:-17,
         marginLeft:31,
         
    }
})