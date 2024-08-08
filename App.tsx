import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppNavigator } from "./src/navigation/AppNavigation";
import { Suspense } from "react";

export default function App() {
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
