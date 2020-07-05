import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./pages/login";
import Location from "./pages/location";
import ListRestaurant from "./pages/listRestaurant";
import Welcome from "./pages/welcome"
import Restaurant from "./pages/restaurant";
import Menu from "./pages/menu";
import Pay from "./pages/pay";

const  AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator  headerMode="none" screenOptions={{
        cardStyle:{
          backgroundColor: '#f0f0f5'
        }}}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Welcome" component={Welcome}/>
        <AppStack.Screen name="Location" component={Location} />
        <AppStack.Screen name="ListRestaurant" component={ListRestaurant} />
        <AppStack.Screen name="Restaurant" component={Restaurant} />
        <AppStack.Screen name="Menu" component={Menu} />
        <AppStack.Screen name="Pay" component={Pay} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
