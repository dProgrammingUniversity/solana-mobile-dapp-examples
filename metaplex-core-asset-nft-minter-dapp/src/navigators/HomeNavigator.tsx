import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TopBar } from "../components/top-bar/top-bar-feature";
import { HomeScreen } from "../screens/HomeScreen";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import BlankScreen from "../screens/BlankScreen";
import MCANFTMinterScreen from "../screens/MCANFTMinterScreen";

const Tab = createBottomTabNavigator();

/**
 * This is the main navigator with a bottom tab bar.
 * Each tab is a stack navigator with its own set of screens.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 */
export function HomeNavigator() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <TopBar />,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Home":
              return (
                <MaterialCommunityIcon
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={color}
                />
              );
              case "MintNFT":
                return (
                  <MaterialCommunityIcon
                    name={
                      focused ? "account-box-multiple-outline" : "account-box-outline"
                    }
                    size={size}
                    color={color}
                  />
                );
              case "Blank":
              return (
                <MaterialCommunityIcon
                  name={
                    focused ? "application-edit" : "application-edit-outline"
                  }
                  size={size}
                  color={color}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MintNFT" component={MCANFTMinterScreen} />
      <Tab.Screen name="Blank" component={BlankScreen} />
    </Tab.Navigator>
  );
}
