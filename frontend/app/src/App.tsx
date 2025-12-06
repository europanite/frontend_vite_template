import React from "react";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { AuthProvider } from "./context/Auth";
import SettingsBar from "./components/SettingsBar";
import HomeScreen from "./screens/HomeScreen";

const App: React.FC = () => {
  return (
    <AuthProvider style={styles.root}>
      <SafeAreaView >
        <SettingsBar />
        <HomeScreen />
      </SafeAreaView>
    </AuthProvider>
  );
};

type Styles = {
  root: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  root: {
    flex: 1,
    backgroundColor: "#a8a8a8b0"
  }
});

export default App;
