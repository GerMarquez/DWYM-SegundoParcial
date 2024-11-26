import { Stack, useNavigation } from "expo-router";
import { useEffect } from "react";
import { FlagProvider } from "./components/Global/ReloadFlagContext";

export default function RootLayout() {

  return (
    <FlagProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)"/>
      </Stack>
    </FlagProvider> 
  );
}
