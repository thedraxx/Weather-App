import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home/Home';
import React from 'react'
import SearchLocation from '../screens/SearchLocation/SearchLocation';

const Tab = createBottomTabNavigator();

const ButtomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Settings" component={SearchLocation} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default ButtomTabNavigator