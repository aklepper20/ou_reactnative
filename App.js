import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Switch } from "react-native";
import AppButton from "./app/components/AppButton";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const category = [
  {
    label: "furniture",
    value: 1,
  },
  {
    label: "camera",
    value: 2,
  },
  {
    label: "clothes",
    value: 3,
  },
];
export default function App() {
  const [cat, setCat] = useState(category[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={cat}
        onSelectItem={(item) => setCat(item)}
        items={category}
        placeholder="category"
        icon="apps"
      />
      <AppTextInput placeholder="email" icon="email" />
    </Screen>
  );
}

const styles = StyleSheet.create({});
