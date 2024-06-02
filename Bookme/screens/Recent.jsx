import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native';

const Recent = () => {

  const [results,setResults] = useState([])
  const [isloading, setLoading] = useState(false)
  const [error, isError] = useState(false)

  return (
    <View style={styles.container}>
        {
          isloading ? (
              <ActivityIndicator size="large" color={"rgba(255,140,0,255)"} />
          ): error ? (
              <View>
                  <Text style={{textAlign:"center",color:'#E3002A'}}>Something went wrong</Text>
                  <Text style={{textAlign:"center"}}>Can't load recent books at the moment</Text>
              </View>
          ) : results.length == 0 ? (
            <View>
              <Image source={require('../assets/icons/1.png')} 
                style={{
                  height:60,width:60,borderRadius:8,resizeMode:'contain',alignSelf:'center'
                }}
              />
              <Text style={{
                  paddingTop:10,color:"rgba(255,140,0,255)"
                }}>
                  No online reads yet
              </Text>
            </View>
          ) :(
            <Text>Loaded</Text>
          )
      }
    </View>
  )
}

export default Recent

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        paddingTop:45
    }
})