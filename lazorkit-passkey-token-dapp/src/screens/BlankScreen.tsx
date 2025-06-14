import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
export default function BlankScreen() {
  return (
    <>
      <View style={styles.screenContainer}>
        <Text variant="titleLarge">This is a blank tab! Dev do something with it!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#904e95', // Dark purple background
  },
});
