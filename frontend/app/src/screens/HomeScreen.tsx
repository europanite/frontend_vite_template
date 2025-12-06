import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

const HomeScreen: React.FC = () => {

  return (
    <ScrollView
      style={styles.scroll}
    >
      <View style={styles.main}>
        <Text>Description</Text>
      </View>
    </ScrollView>
  );
};

type Styles = {
  scroll: ViewStyle;
  container: ViewStyle;
  main: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  scroll: {
    flex: 1,
  },
  main: {
    padding:10,
  },
  container: {
    flex:1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: "stretch",
  } as any,
});

export default HomeScreen;
