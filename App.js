import { StatusBar } from "expo-status-bar";
import React from "react";

//styling. theme
import { ThemeProvider } from "styled-components/native";
import Navigation from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";

//fonts
import {
  useFonts as useCreteRound,
  CreteRound_400Regular
} from "@expo-google-fonts/crete-round";
import {
  useFonts as useNorican,
  Norican_400Regular
} from "@expo-google-fonts/norican";
import {
  useFonts as useAlmarai,
  Almarai_300Light,
  Almarai_400Regular,
  Almarai_700Bold,
  Almarai_800ExtraBold
} from "@expo-google-fonts/almarai";

export default function App() {
  const [almaraiLoaded] = useAlmarai({
    Almarai_400Regular,
    Almarai_700Bold
  });

  const [noricanLoaded] = useNorican({
    Norican_400Regular
  });

  if (!almaraiLoaded || !noricanLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
