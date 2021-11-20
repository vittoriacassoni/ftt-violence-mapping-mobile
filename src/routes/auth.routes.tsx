import React from 'react';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateAccount from '../screens/CreateAccount';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const color = '#213C73';
          const size = 18;

          switch (route.name) {
            case 'CreateAccount':
              return <FontAwesome5 name="user-alt" color={color} size={18} />;
            case 'Login':
              return <FontAwesome name="plus-circle" color={color} size={22} />;
          }
        },
      })}
    >
      <Tab.Screen name="CreateAccount" component={CreateAccount} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}
