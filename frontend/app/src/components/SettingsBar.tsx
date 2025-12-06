import { View, Text, Pressable, StyleSheet, Linking } from "react-native";
import { REPO_URL } from "../screens/HomeScreenUtil";

const SettingsBar = () => {
  const openUrl = (url: string) => {
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open URL:", err);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Pressable onPress={() => openUrl(REPO_URL)}>
          <Text style={styles.logoText}>Frontend Vite Template</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(148,163,184,0.4)",
    backgroundColor: "rgba(15,23,42,0.98)"
  },
  inner: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  logoText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#e5e7eb",
    marginRight: 8,
    letterSpacing: 0.8,
    textTransform: "uppercase"
  },
  tagText: {
    fontSize: 11,
    color: "#a5b4fc",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(129,140,248,0.7)",
    backgroundColor: "rgba(79,70,229,0.15)"
  },
  navRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  navButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginLeft: 8,
    borderWidth: StyleSheet.hairlineWidth
  },
  primaryButton: {
    backgroundColor: "#4f46e5",
    borderColor: "rgba(129,140,248,0.9)"
  },
  ghostButton: {
    borderColor: "rgba(148,163,184,0.7)",
    backgroundColor: "transparent"
  },
  primaryButtonText: {
    fontSize: 12,
    color: "#f9fafb",
    fontWeight: "600"
  },
  ghostButtonText: {
    fontSize: 12,
    color: "#9ca3af"
  }
});

export default SettingsBar;
