import { StyleSheet, Text, View, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/src/components/sections/Header";
import Card from "@/src/components/sections/Card";
import Transactions from "@/src/components/sections/Transactions";
import { useColorScheme } from "nativewind";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import React from "react";

const { width, height } = Dimensions.get('window');

// Define your styles using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
});

export default function App() {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    const [fontsLoaded, fontError] = useFonts({
        SpaceGrotesk: require("../src/components/font/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded) {
        return null;
    }
console.log(colorScheme)
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colorScheme === 'white' ? 'white' : 'dark' }]}>
      <StatusBar style={colorScheme == 'dark' ? 'dark' : 'white'} />
      <View style={{ width, height }} onLayout={onLayoutRootView}>
        <Header />
        <Card />
        <Transactions />
      </View>
    </SafeAreaView>
  );
}
