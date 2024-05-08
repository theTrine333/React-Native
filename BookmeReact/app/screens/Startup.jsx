import { Button, Image, StyleSheet, Text, Pressable, View, useColorScheme } from 'react-native'
import React from 'react'
import { router, useRouter } from 'expo-router'
import Home from './Home'

const Startup = ({navigation}) => {
  return (
    <View style={style.container}>
        <Text style={style.headingText}>BOOK.me</Text>
        <Image
          source={require('../../assets/icons/0.png')}
        />
        <Text style={style.preText}>Looking for that book on the web is not easy, 
          Here you just tell us the book title or the topic and we organise your results.</Text>
        <Pressable style={style.button} onPress={() => {
          navigation.navigate("ScreenTabs")
        }}>
          <Text style={{color:'white',fontWeight:'700'}}>Get Started</Text>
        </Pressable>
      <Text style={{paddingTop:10,paddingBottom:5}}>POWEREDBY : </Text>
      <Text style={{color:'rgba(0,0,255,255)',fontWeight:'bold'}}>TRINETECHNOLOGIES</Text>
    </View>
  )
}

export default Startup;

const style = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:40,
      alignItems:"center",
      justifyContent:"center",
      paddingBottom:20
    },headingText:{
      fontWeight:"bold",
      fontSize:26,
      paddingTop:30,
      paddingBottom:40
    },preText:{
        fontSize:12,
        textAlign:"center",
        paddingBottom:20
    },button:{
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:60,
        paddingRight:60,
        backgroundColor:'rgba(255,130,0,205)',
        borderRadius:10,
    }
})