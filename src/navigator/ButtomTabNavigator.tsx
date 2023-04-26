import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home/Home';
import React from 'react'
import SearchLocation from '../screens/SearchLocation/SearchLocation';
import { Colors } from '../utilities/colors';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const ButtomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarStyle: {
                        elevation: 1,
                        backgroundColor: Colors.tabColor,
                        height: 80,
                        borderTopWidth: 0,
                        paddingBottom: 10,
                    }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ 
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: Colors.white,
                     }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SearchLocation}
                    options={{ 
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="search" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: Colors.white,
                     }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default ButtomTabNavigator