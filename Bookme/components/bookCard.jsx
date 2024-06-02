import { StyleSheet,Text, View,Image, Pressable, Button, TouchableOpacity } from 'react-native'
import {React,useState} from 'react'
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import details from './details'
const Card = ({
    bookUrl,
    Title,
    Description,
    bookPoster,
    authors,
    yearOfPub,
    lang,
    size,
    Ext,
    download_server,
    backup_server,
    backup_server2
}) => {

const [imageUrl,setImageUrl] = useState("")
const [loading,isLoading] = useState(false)
const navigation = useNavigation();
return (
    <TouchableOpacity onPress={() => {
        navigation.navigate("Details",{
            Poster:(bookPoster || "https://libgen.li/img/blank.png"),
            title:Title,
            description:Description,
            bookurl:bookUrl,
            Server:download_server
        })
    }}>
        <View style={styles.card}>
            <Image 
                source={{uri : (bookPoster || "https://libgen.li/img/blank.png")}} 
                style={{
                    height:100,width:100,borderRadius:8,resizeMode:'contain'
                }}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.heading}>{Title}</Text>
                <Text style={styles.subHeading}>Author(s) : {authors}</Text>
                <Text style={styles.subHeading}>Lang : {lang} | Size : {size} | {Ext} | </Text>
            </View>
        </View>
        <Divider style={{marginTop:5,}}/>
    </TouchableOpacity>
  )
}

export default Card;

const styles = StyleSheet.create({
    card:{
        flex: 1,
        flexDirection:'row',
        width:"100px",
        height:"200px"
    },heading:{
        fontWeight:'bold',
    },subHeading:{
        fontSize:12,
        width:"85%",
    },
    detailsContainer:{
        gap:5,
        alignContent:"flex-start",
        justifyContent:"flex-start",
        width:"100%"
    },buttonConatiners:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})