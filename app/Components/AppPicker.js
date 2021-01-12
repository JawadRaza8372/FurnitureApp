import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({ iconName,iconColor, items, onSelectItem, placeholder, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
        {(iconName &&iconColor) &&(<Icon  name={iconName} background={iconColor}/>)}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={"grey"}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <TouchableOpacity style={styles.open} onPress={() => setModalVisible(false)}>
        <MaterialCommunityIcons name="close" size={30} color="#ffffff" /></TouchableOpacity>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fafafa",
    borderRadius: 25,
    flexDirection: "row",
    width: "90%",
    alignSelf:"center",
    padding: 15,
    marginVertical: 10,
  },open:{borderRadius:50,backgroundColor:"tomato",flexDirection: "row",alignSelf:"flex-end",marginVertical: 10,marginRight:15},
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color:"grey",
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
