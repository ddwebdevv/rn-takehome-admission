import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AccountNavigator from "./account.navigator.js";

const Navigation = () => {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
