import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/src/components/sections/Header";
import Card from "@/src/components/sections/Card";
import Transactions from "@/src/components/sections/Transactions";
import { useColorScheme } from "nativewind";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { on } from "stream";

// Define your styles using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    
    flex: 6, // Equivalent to p-6
    backgroundColor: 'white', 
  },
});

export default function App() {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    const [fontsLoaded, fontError] = useFonts({
        SpaceGrotesk: require("../src/components/font/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf"),
    });

    const onLayoutRootView = useCallback (async ()=> {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded ) {
        return null;
    }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colorScheme === 'light' ? 'black' : 'white' }]}>
    <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <View onLayout={onLayoutRootView}>
        <Header />
        <Card />
        <Transactions />
      </View>
    </SafeAreaView>
  );
}
