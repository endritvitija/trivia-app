import { Suspense } from "react";
import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import { AppNavigator } from "./src/navigation/AppNavigation";
import useLoadFonts from "./src/hooks/useLoadFonts";

export default function App() {
  const loadFonts = useLoadFonts();

  if (!loadFonts) {
    return null;
  }
  return (
    <Suspense fallback={<View style={styles.container} />}>
      <StatusBar style="auto" />
      <AppNavigator />
    </Suspense>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
