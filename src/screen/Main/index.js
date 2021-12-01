import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./styles";

export default ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Main</Text>
    </SafeAreaView>
  );
};
