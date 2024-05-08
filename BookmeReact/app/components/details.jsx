import { 
    ScrollView,
    StyleSheet, 
    Text, 
    Image,
    View,
    Pressable 
} from 'react-native'
import React from 'react'

const Details = ({url,title,description}) => {

  return (
    <ScrollView style={styles.container}>
        <Image source={{uri:url}} style={styles.Imagebox}/>
        <View style={styles.title}>
            <Text style={{fontWeight:'bold', fontSize:18}}>Title :{title} </Text>
            <Text style={{fontSize:16}}>{props.Title}</Text>
        </View>
        <View style={styles.description}>
            <Text style={{fontWeight:'bold', fontSize:18,paddingTop:10,textAlign:'center'}}>Description</Text>
            <Text style={{fontSize:16}}>
                {description}
            </Text>
        </View>
        <View style={styles.buttonsContainer}>
            <Pressable style={{backgroundColor:'rgba(255,140,0,255)',paddingTop:15,borderRadius:40,paddingBottom:15,paddingLeft:30,paddingRight:30}}>
                <Text>Read Online</Text>
            </Pressable>
            <Pressable style={{backgroundColor:'rgba(45,100,255,255)',paddingTop:15,borderRadius:40,paddingBottom:15,paddingLeft:30,paddingRight:30}}>
                <Text>Download</Text>
            </Pressable>
        </View>
    </ScrollView>
  )
}

export default Details;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        paddingLeft:5
    },Imagebox:{
        alignContent: 'center',
        justifyContent: 'center',
        width: 400,
        borderRadius:20,
        resizeMode:"contain",
    },title:{
        flex: 1,
        flexDirection: 'row',
        width:'80%'
    },description:{
        flex: 1,
        flexDirection: 'column',
        width:'100%',
        
    },buttonsContainer: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        gap:10,
        paddingTop: 20,
    }
})