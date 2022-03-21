import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";

import AppNavigator from "./app/navigation/AppNavigator";
import FeedNavigator from "./app/navigation/FeedNavigator";
import AccountNavigator from "./app/navigation/AccountNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
