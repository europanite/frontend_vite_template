import { ScrollView, View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <Text>Description</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: "stretch"
  },
  main: {
    padding: 10
  }
});

export default HomeScreen;
