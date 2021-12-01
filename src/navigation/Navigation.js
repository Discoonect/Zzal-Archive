import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../screen/Main";

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
        options={{ title: "짤 아카이브" }}
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
