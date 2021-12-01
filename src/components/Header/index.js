import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

export default ({ navigation, title }) => {
  return (
    <View style={styles.header_container}>
      <Text style={styles.header_title}>{title}</Text>
    </View>
  );
};
