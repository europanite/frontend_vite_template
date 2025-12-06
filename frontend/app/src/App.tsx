import type { FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { AuthProvider } from "./context/Auth";
import SettingsBar from "./components/SettingsBar";
import HomeScreen from "./screens/HomeScreen";

const App: FC = () => {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.root}>
        <SettingsBar />
        <HomeScreen />
      </SafeAreaView>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#a8a8a8b0"
  }
});

export default App;
