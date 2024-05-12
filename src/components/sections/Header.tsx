import React, { useState } from 'react';
import { View, Text, Image, Switch } from 'react-native';
import { useColorScheme } from "nativewind";
import { BellIcon } from "react-native-heroicons/outline";

export default function Header() {
    const { colorScheme, toggleColorScheme } = useColorScheme();


  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colorScheme ? 'black' : 'white' }}>
      <View style={{ borderWidth: 0, borderColor: 'white', borderRadius: 25, overflow: 'hidden' }}>
        <Image 
          source={require("../../../assets/images/Cartoon-Avatar-PNG-Image-Background-2982152754.png")}
          style={{
            width: 45,
            height: 45,
          }}
        />
      </View>

      {/* Notification and Switch Icon */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 8 }}>
        <BellIcon 
          size={30}
          strokeWidth={2}
          color={colorScheme == "dark" ?  "white" : "black"}
        />

        <Switch 
          value={colorScheme == "dark"} 
          onValueChange={toggleColorScheme} 
          thumbColor={colorScheme ? 'green' : undefined} // Change thumb color to green when in dark mode
          trackColor={{ false: '#767577', true: '#81b0ff' }} // Track color changes according to the current color scheme
        />
      </View>
    </View>
  );
}
