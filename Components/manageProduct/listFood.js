import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default class listFood extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ paddingBottom: 10, backgroundColor: 'white', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Text style={{ color: 'black', fontWeight: 'bold', paddingTop: 6 }}>Quản lý sản phẩm</Text>
         <View >
           <TextInput style={styles.textInput} placeholder='Tìm món ở đây' placeholderTextColor='black'></TextInput>
         </View>
        <TouchableOpacity>
            <Image source={require('../../assets/magnifying-glass.png')} style={{marginLeft:-180, width:15, height:15, marginTop:-26}}/>
        </TouchableOpacity>
        
        </View>

      <ScrollView style={{marginRight:-20, marginLeft:-6}}>
        <View style={styles.cantainer}>
          <View style={styles.componentProduct}>
            <View style={styles.borderleft} />
            <Image style={styles.image} source={require('../../assets/download.jpeg')} />
            <View style={{ flex: 15}}>
              <Text style={styles.text1}>Cơm tấm</Text>
              <Text style={{ paddingLeft: 5,  fontSize: 20, color:'black'  }}>Giá: 20.000</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.touchableopacity}>
              <Text style={{ textAlign: 'center', color: '#2FD5CF', fontWeight: 'bold' }}>Chọn</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cantainer}>
          <View style={styles.componentProduct}>
            <View style={styles.borderleft} />
            <Image style={styles.image} source={require('../../assets/1.jpeg')} />
            <View style={{ flex: 15 }}>
              <Text style={styles.text1}>Cơm chiên</Text>
              <Text style={{ paddingLeft: 5, fontSize: 20, color:'black' }}>Giá: 25.000</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.touchableopacity}>
              <Text style={{ textAlign: 'center', color: '#2FD5CF', fontWeight: 'bold' }}>Chọn</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cantainer}>
          <View style={styles.componentProduct}>
            <View style={styles.borderleft} />
            <Image style={styles.image} source={require('../../assets/2.jpeg')} />
            <View style={{ flex: 15 }}>
              <Text style={styles.text1}>Cơm xào bò</Text>
              <Text style={{ paddingLeft: 5, fontSize: 20, color:'black' }}>Giá: 20.000</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.touchableopacity}>
              <Text style={{ textAlign: 'center', color: '#2FD5CF', fontWeight: 'bold' }}>Chọn</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cantainer}>
          <View style={styles.componentProduct}>
            <View style={styles.borderleft} />
            <Image style={styles.image} source={require('../../assets/3.jpeg')} />
            <View style={{ flex: 15 }}>
              <Text style={styles.text1}>Bún bò</Text>
              <Text style={{ paddingLeft: 5, fontSize: 20, color:'black' }}>Giá: 22.000</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.touchableopacity}>
              <Text style={{ textAlign: 'center', color: '#2FD5CF', fontWeight: 'bold' }}>Chọn</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cantainer}>
          <View style={styles.componentProduct}>
            <View style={styles.borderleft} />
            <Image style={styles.image} source={require('../../assets/4.jpeg')} />
            <View style={{ flex: 15 }}>
              <Text style={styles.text1}>Bò né</Text>
              <Text style={{ paddingLeft: 5, fontSize: 20, color:'black' }}>Giá: 30.000</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.touchableopacity}>
              <Text style={{ textAlign: 'center', color: '#2FD5CF', fontWeight: 'bold' }}>Chọn</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cantainer}>
          <View style={styles.componentProduct}>
            <View style={styles.borderleft} />
            <Image style={styles.image} source={require('../../assets/5.jpeg')} />
            <View style={{ flex: 15 }}>
              <Text style={styles.text1}>Xôi mặn</Text>
              <Text style={{ paddingLeft: 5, fontSize: 20, color:'black' }}>Giá: 12.000</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.touchableopacity}>
              <Text style={{ textAlign: 'center', color: '#2FD5CF', fontWeight: 'bold' }}>Chọn</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cantainer}>
          <View style={styles.componentProduct}>
            <View style={styles.borderleft} />
            <Image style={styles.image} source={require('../../assets/6.jpeg')} />
            <View style={{ flex: 15 }}>
              <Text style={styles.text1}>Canh chua</Text>
              <Text style={{ paddingLeft: 5, fontSize: 20, color:'black' }}>Giá: 15.000</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.touchableopacity}>
              <Text style={{ textAlign: 'center', color: '#2FD5CF', fontWeight: 'bold' }}>Chọn</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cantainer}>
          <View style={styles.componentProduct}>
            <View style={styles.borderleft} />
            <Image style={styles.image} source={require('../../assets/7.jpeg')} />
            <View style={{ flex: 15 }}>
              <Text style={styles.text1}>Gà rán</Text>
              <Text style={{ paddingLeft: 5, fontSize: 20, color:'black' }}>Giá: 22.000</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.touchableopacity}>
              <Text style={{ textAlign: 'center', color: '#2FD5CF', fontWeight: 'bold' }}>Chọn</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cantainer}>
          <View style={styles.componentProduct}>
            <View style={styles.borderleft} />
            <Image style={styles.image} source={require('../../assets/8.jpeg')} />
            <View style={{ flex: 15 }}>
              <Text style={styles.text1}>7up</Text>
              <Text style={{ paddingLeft: 5, fontSize: 20, color:'black' }}>Giá: 10.000</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.touchableopacity}>
              <Text style={{ textAlign: 'center', color: '#2FD5CF', fontWeight: 'bold' }}>Chọn</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
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
    marginRight: 25,
    marginTop: 20,
    padding: 12
  },
 textInput:{
  backgroundColor: '#67e6dc', 
  paddingLeft: 110, 
  paddingRight: 110, 
  paddingBottom:4,
  borderRadius: 20,
  // color:'black',
  marginTop: 5,
  paddingTop:5,
  marginLeft:-200,
  marginRight:-200,
  textAlign:'center',
 },
});