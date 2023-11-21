import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import HomeDark from "./screens/HomeDark";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
            backgroundColor="#000"
            barStyle="light-content"
            translucent={false}
        />
        <HomeDark />
      </SafeAreaView>
  );
};

export default App;
