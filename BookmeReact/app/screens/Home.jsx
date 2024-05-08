import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, Pressable, View } from 'react-native';
import React, { useState } from 'react';
import Card from '../components/bookCard';
import { ActivityIndicator } from 'react-native';
import  {getSearch} from '../../api/api';

export default function Home(){
    const [isLoading, setLoading] = useState(false)
    const [searchText,setSearchText] = useState('')
    const [error,isError] = useState(false)
    const [results,setResults] = useState([])
    return(
        <View style={styles.container}>
            <View style={styles.searchbox}>
                <TextInput 
                    placeholder='Search for a book' 
                    style={styles.textInput}
                    onChangeText={text => {setSearchText(text)}}
                    onSubmitEditing={() => {
                        setLoading(true);
                        {
                            setResults(new Array(0));
                            getSearch(searchText,setLoading,isError).then((books) => {
                                // Process the books here
                                if(books.length == 0){
                                    isError(true)
                                }else{
                                    books.forEach(book => {
                                        results.push(book);   
                                    });
                                    // setResults(books)
                                    setLoading(false)
                                    setResults(prevResults => [...prevResults, ...books]);
                                }
                                // Continue with the execution after processing books
                            }).catch(error => {
                                isError(true);
                            });
                        }
                    }}
                />
            </View>
                
            <View style={styles.resultView}>
                {
                    isLoading ? (
                        <ActivityIndicator size="large" color={"rgba(255,140,0,255)"} />
                    ): error ? (
                        <View>
                            <Text style={{textAlign:"center",color:'#E3002A'}}>Something went wrong</Text>
                            <Text style={{textAlign:"center"}}>Can't fetch data at the moment</Text>
                        </View>
                    ) : (
                     <FlatList
                        data={results}
                        renderItem={({item}) => (
                            <Card
                                bookPoster={item.poster}
                                Title={item.title}
                                lang = {item.lang}
                                size = {item.size}
                                authors={item.authors}
                                Ext = {item.Ext}
                                bookUrl={item.book_url}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{ gap:10}}
                        vertical
                        showsVerticalScrollIndicator={false}
                     />   
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        paddingTop:40,
        
    },searchbox:{
        justifyContent:"center",
        flexDirection:'row',
        width:'100%',
        height:40,
        gap:10
    },textInput:{
        width:'90%',//Was 80%
        borderRadius:8,
        paddingLeft:20,
        backgroundColor:'rgba(180,180,180,255)'
    },resultView:{
        // backgroundColor:'rgba(220,220,220,255)',
        display:'flex',
        width:'100%',
        height:'95%',
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'column',
        paddingTop:10
    }
})