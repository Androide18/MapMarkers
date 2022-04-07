import {
  FlatList,
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";

export default ({ points, closeModal }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={points.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.button}>
        <Button title="Cerrar" onPress={closeModal} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button:{
    paddingBottom: 15,
  },
  list: {
    height: Dimensions.get("window").height - 350,
    width: Dimensions.get("window").width - 100,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "50%",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },
});
