import { StyleSheet, Modal, Text, View, Dimensions } from "react-native";

export default ({ children, visibility }) => {
  return (
    <Modal animationType="slide" transparent={true} 
    visible={visibility}>
      <View style={styles.center}>
        <View style={styles.modalView}>
          <Text>{children}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalView: {
    minWidth: Dimensions.get("window").width - 150,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
