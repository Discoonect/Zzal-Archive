import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../screen/Main";
import { colors } from "../styles";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="main"
      >
        <Stack.Screen name="Main" component={MainNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Main}
        options={{
          title: "짤 아카이브",
          headerStyle: styles.header_style,
        }}
      />
    </Stack.Navigator>
  );
};

const MyTheme = {
  dark: false,
  colors: {
    background: "white",
  },
};

const styles = StyleSheet.create({
  header_style: {
    borderBottomWidth: 1,
    borderBottomColor: colors.color_secondary_lightgray,
  },
});
