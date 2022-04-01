import { StyleSheet, View, Button, Text } from "react-native";

export default ({ onPressLeft, textLeft }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={onPressLeft} title={textLeft} />
      <Button title="Mostrar/Ocultar" />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
