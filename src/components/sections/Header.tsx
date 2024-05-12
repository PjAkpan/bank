import React, { useState } from 'react';
import { View, Text, Image, Switch, useColorScheme } from 'react-native';
import { BellIcon } from "react-native-heroicons/outline";

export default function Header() {
  const colorScheme = useColorScheme(); // Get the device's color scheme
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  const toggleColorScheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: isDarkMode ? 'black' : 'white' }}>
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
          color={isDarkMode ?  "white" : "black"}
        />

        <Switch 
          value={isDarkMode} 
          onValueChange={toggleColorScheme} 
          thumbColor={isDarkMode ? 'green' : undefined} // Change thumb color to green when in dark mode
          trackColor={{ false: '#767577', true: '#81b0ff' }} // Track color changes according to the current color scheme
        />
      </View>
    </View>
  );
}
