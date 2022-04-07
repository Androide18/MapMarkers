import { Text, TextInput, View, StyleSheet } from "react-native";

export default ({ title, ...rest }) => {
  //rest operator, toma todas las ootraspropiedades q no toma el title, po ej, subtitulo, on change, etc, se le asignan a este objeto.
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
  },
});
