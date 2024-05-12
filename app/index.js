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

// Define your styles using StyleSheet.create
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "light",
//   },
//   darkBackground: {
//     backgroundColor: "dark",
//   },
// });

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

  console.log("pppppp", colorScheme);

  return (
    <SafeAreaView className="p-6 dark:bg-neutral-900">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <View onLayout={onLayoutRootView}>
        <View className="my-6">
          <Header />
          <Card />
          <Transactions />
        </View>
      </View>
    </SafeAreaView>
  );
}
