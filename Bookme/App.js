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
import * as Notix from 'notix-rn';
import Home from './screens/Home';

const loadInterstitial = async () => {
  interstitialLoader = await Notix.Interstitial.createLoader(7563075);
  interstitialLoader.startLoading();

  try {
    var interstitialData = await interstitialLoader.next(5000);
  } catch (Exception) {
    return;
  }

  Notix.Interstitial.show(interstitialData);
};

export default function App() {
  const Stack = createNativeStackNavigator()
  
  const adUnitId = TestIds.APP_OPEN;


  const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
  });

  useEffect(() => {
    mobileAds().initialize()
    // appOpenAd.show();
    loadInterstitial();
  }, [])
  
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Startup' component={Startup}/>
        <Stack.Screen name='Home' component={Home}/>
        {/* <Stack.Screen name='ScreenTabs' component={Navigation}/> */}
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
