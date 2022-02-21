// ./src/components/Header.tsx
import { View, StyleSheet } from "react-native";
import { Text, Headline } from "react-native-paper";

export const Header = ({title}: {title: string}) => {
  return (
    <View style={styles.container}>
      <Headline style={styles.header}>
        {title}
      </Headline>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
  },
});