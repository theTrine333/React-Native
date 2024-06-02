import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Navigation from './Navigation';
import Startup from './screens/Startup';
import Details from './components/details';
import { StatusBar } from 'expo-status-bar';
import {AppOpenAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';
import { useEffect } from 'react';
import mobileAds from 'react-native-google-mobile-ads';

export default function App() {
  const Stack = createNativeStackNavigator()
  
  const adUnitId = TestIds.APP_OPEN;


  const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
  });

  useEffect(() => {
    mobileAds().initialize()
    // appOpenAd.show();
  }, [])
  
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
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
