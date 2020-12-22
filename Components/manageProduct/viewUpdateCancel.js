import React, { Component } from 'react'
import {StyleSheet,
        View, 
        Text,
        Picker, 
        TextInput, 
        TouchableOpacity, 
        Image} 
        from 'react-native'

export default class viewUpdateCancel extends Component {
    state = {
        choosenIndex: 0
    };

    render() {
        return (
            
            <View style={styles.container}>
            
                <View style={{flex:3, backgroundColor:'#dfe4ea'}}>
                    <TouchableOpacity style={{backgroundColor:'#b2bec3',  marginTop:1, marginBottom:-1, flex:1}}> 
                        <Image source={require('../../assets/download.jpeg')} style={{marginLeft:1, height:166, width: 410}}/>
                    </TouchableOpacity>
                
                <View>
                    <TouchableOpacity style={{backgroundColor:'#b2bec3',  marginTop:1, marginBottom:4.5, flex:1}}> 
                        <Image source={require('../../assets/picture.png')} style={{marginLeft:4, height:30, width: 30}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:40,marginRight:220}}>
                        <Text style={{color:'black', paddingBottom:7}}>Chọn hình</Text>
                    </TouchableOpacity>
                </View>
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

                    <View style={{marginTop:38, marginLeft:20}}>
                         <Text style={{color:'black', fontSize:20}}>Tên:</Text>
                         <TextInput style={styles.textInput}></TextInput>
                    </View>
                    
                    <View style={{marginTop:38}}>
                         <Text style={{color:'black', marginLeft:20, fontSize:20}}>Loại sản phẩm:</Text>
                         <Picker style={styles.pickerStyle}
                            selectedValue={this.state.language}
                            color={this.state.language}
                            onValueChange={(itemValue, itemPosition) =>
                                this.setState({language: itemValue, choosenIndex: itemPosition})}
                         >
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="React Native" value="rn" />
                         </Picker>
                    </View>

                    <TouchableOpacity style={{backgroundColor:'#81ecec', marginRight: 247, marginLeft:60, marginTop:190,width:80, borderRadius:10, padding:5}}>
                       <Text style={{color:'black', fontFamily:"Copperplate", paddingLeft:7}}>Cập nhật</Text>
                   </TouchableOpacity>
                   
                   <TouchableOpacity style={{backgroundColor:'#ff7675', marginLeft:265, marginRight:30, marginTop:-30, width:80, borderRadius:10, padding:5}}>
                       <Text style={{color:'black', fontFamily:"Copperplate", paddingLeft:23}}>Huỷ</Text>
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
        marginLeft:154,
        marginTop:-24, 
    },

    textInput:{
         color:'black',
         height:'auto', 
         width:100, 
         borderBottomWidth:1,
         marginTop:-55,
         marginLeft:44,
         
    }
})