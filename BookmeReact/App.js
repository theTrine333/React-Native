import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Navigation from './app/Navigation';
import Startup from './app/screens/Startup';
import Details from './app/components/details';

export default function App() {
  const onlineSource = {uri : "https://download.library.lol/main/1000/8b7f9439ff75aeac89b8748bdbc1e1d3/%28Programmer%20to%20Programmer%29%20Peter%20C.%20Norton%2C%20Alex%20Samuel%2C%20Dave%20Aitel%2C%20Eric%20Foster-Johnson%2C%20Leonard%20Richardson%2C%20Jason%20Diamond%2C%20Aleatha%20Parker%2C%20Michael%20Roberts%20-%20Beginning%20Python-Wiley%20Pub%20%282005%29.pdf",cach:true}
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Startup' component={Startup}/>
        <Stack.Screen name='ScreenTabs' component={Navigation}/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
      justifyContent:'center',
      alignContent: 'center',
  }
})