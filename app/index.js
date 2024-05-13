import React, { useCallback } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/src/components/sections/Header";
import Card from "@/src/components/sections/Card";
import Transactions from "@/src/components/sections/Transactions";
import { useColorScheme } from "nativewind";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

 const { width, height } = Dimensions.get("window");

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const [fontsLoaded, fontError] = useFonts({
    SpaceGroteskBold: require("../src/components/font/Space_Grotesk/static/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskSemiBold: require("../src/components/font/Space_Grotesk/static/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskMedium: require("../src/components/font/Space_Grotesk/static/SpaceGrotesk-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }


   return (
     <SafeAreaView  style={[styles.container, colorScheme === "dark" && styles.darkBackground]}>
       <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
         <View style={styles.content}>
          <Header />
          <Card />
           <Transactions />
         </View>
       </View>
   </SafeAreaView>
   );
 }
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Define default background color
  },
  darkBackground: {
    backgroundColor: "black", // Define dark mode background color
  },
  content: {
    flex: 1,
    padding: 8,
  },
});