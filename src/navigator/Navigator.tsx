import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../screens/home/Home';
import Detail from '../screens/Detail/Detail';
import { Colors } from '../utilities/colors';

export type RootStackParamList = {
  Home: any;
  Detail: {
    lat: number;
    lon: number;
  }

};


const Stack = createStackNavigator<RootStackParamList>();


const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          headerShadowVisible: true,
          headerShown: false,
        })} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({
          headerTitle: "Weather Detail",
          headerShown: false,
          headerBackTitle: "Back",
          headerTintColor: Colors.white,
          headerStyle: {
            backgroundColor: Colors.Cardpurple,
          },
          headerTitleStyle: {
            fontWeight: '200',
          },
        })}
      />
    </Stack.Navigator>
  )
}

export default Navigator