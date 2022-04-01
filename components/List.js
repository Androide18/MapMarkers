import { FlatList, Text, View,Button, StyleSheet, Dimensions } from "react-native";

export default ({ points }) => {
    console.log('ACA');
    console.log(points);
  return (
      <>
      <View style={styles.list}>
    <FlatList
      data={points.map(x => x.name)}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={item => item}
    />
    </View>
    <View>
        <Button title='Cerrar'/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get('window').height-300,

    },
});
