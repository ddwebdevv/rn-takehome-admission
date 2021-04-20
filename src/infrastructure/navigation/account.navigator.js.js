import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from "../../features/account/screens/signup.screen";

const AccountStackNavigator = createStackNavigator();

const AccountNavigator = () => (
  <AccountStackNavigator.Navigator headerMode="none">
    <AccountStackNavigator.Screen name="Main" component={SignUpScreen} />
  </AccountStackNavigator.Navigator>
);

export default AccountNavigator;
