import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default class listFood extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ paddingBottom: 10, backgroundColor: 'white', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Text style={{ color: 'black', fontWeight: 'bold', paddingTop: 6 }}>Quản lý sản phẩm</Text>
         <View>
           <TextInput style={styles.textInput} placeholder='  Tìm món ăn o day' placeholderTextColor='black'></TextInput>
           <Image source={require('../../assets/magnifying-glass.png')} style={{marginLeft:5, width:15, height:15, marginTop:-17}}/>
          </View>
           {/* <Image source={require('../../assets/magnifying-glass.png')}/> */}
          
          {/* <TextInput style={styles.textInput} placeholder='Tìm món ăn ở đây' placeholderTextColor='black'/> */}
        </View>


        <View style={styles.cantainer}>
          <View style={styles.componentProduct}>
            <View style={styles.borderleft} />
            <Image style={styles.image} source={require('../../assets/download.jpeg')} />
            <View style={{ flex: 15}}>
              <Text style={styles.text1}>Com tam</Text>
              <Text style={{ paddingLeft: 5,  fontSize: 20, color:'black'  }}>Giá: 20000</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.touchableopacity}
            >
              <Text style={{ textAlign: 'center', color: '#2FD5CF', fontWeight: 'bold' }}>Chọn</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cantainer}>
          <View style={styles.componentProduct}>
            <View style={styles.borderleft} />
            <Image style={styles.image} source={require('../../assets/download.jpeg')} />
            <View style={{ flex: 15 }}>
              <Text style={styles.text1}>Com tam</Text>
              <Text style={{ paddingLeft: 5, fontSize: 20, color:'black' }}>Giá:20000</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.touchableopacity}
            >
              <Text style={{ textAlign: 'center', color: '#2FD5CF', fontWeight: 'bold' }}>Chọn</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cantainer}>
          <View style={styles.componentProduct}>
            <View style={styles.borderleft} />
            <Image style={styles.image} source={require('../../assets/download.jpeg')} />
            <View style={{ flex: 15 }}>
              <Text style={styles.text1}>Com tam</Text>
              <Text style={{ paddingLeft: 5, fontSize: 20, color:'black' }}>Giá:20000</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.touchableopacity}
            >
              <Text style={{ textAlign: 'center', color: '#2FD5CF', fontWeight: 'bold' }}>Chọn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  cantainer: {
    backgroundColor: '#CFCFCF',
    flexDirection: 'row',
  },
  line: {
    height: 50,
    backgroundColor: "grey",
    borderLeftWidth: 1,
    borderStyle: 'dashed'
  },
  image: {
    width: 90,
    height: 60,
    margin: 5,
    resizeMode: 'cover'
  },
  text1: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color:'black',
  },
  borderleft: {
    backgroundColor: '#2FD5CF',
    borderTopLeftRadius: 90,
    borderBottomLeftRadius: 90,
    flex: .3,
    textAlign: "center"
  },
  componentProduct: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'white',
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center'
  },
  touchableopacity: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 10,
    marginTop: 20,
    padding: 12
  },
 textInput:{
  backgroundColor: '#d2dae2', 
  paddingLeft: 180, 
  paddingRight: 180, 
  paddingBottom:4,
  borderRadius: 20,
  color:'black',
  marginTop: 5
 },
});