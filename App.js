import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, Text } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [pointTemp, setPointTemp] = useState({});
  const [name, setName] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("new_point"); // new_point, all_points
  const [visibility, setVisibility] = useState(false);

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter("new_point");
    setPointTemp(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setName(text);
  };

  const handleSubmit = () => {
    const newPoint = { coordinate: pointTemp, name: name };
    console.log("newPoint");
    console.log(newPoint);

    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName("");
  };
  console.log("points");
  console.log(points);

  const handleList = () => {
    setVisibilityFilter("all_points");
    setVisibility(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Map onLongPress={handleLongPress} />
      <Panel onPressLeft={handleList} textLeft="Lista" />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_point" ? (
          <>
            <Input
              title="Nombre"
              placeholder="Nombre del punto"
              onChangeText={handleChangeText}
            />
            <Button title="Aceptar" onPress={handleSubmit} />
            {/* <Button title="Cancelar" onPress={} /> */}
          </>
        ) : (
          <List points={points} />
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
