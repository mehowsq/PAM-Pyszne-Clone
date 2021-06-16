import React from "react";

import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs"

import {Home, OrderDelivery} from "../screens";

import { COLORS, icons } from "../constants"

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 1,
                    backgroundColor: "transparent",
                    elevation: 0

                }
            }}
        >
            <Tab.Screen 
                name ="suwak"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.like}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.black : COLORS.secondary
                            }}
                        /> 
                    )
                }}
            />
                        <Tab.Screen 
                name ="Location"
                component={OrderDelivery}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.pin}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? COLORS.black : COLORS.secondary
                            }}
                        /> 
                    )
                }}
            />
                        <Tab.Screen 
                name ="Search"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.black : COLORS.secondary
                            }}
                        /> 
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;