import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Main from '../screens/Main';
import Account from '../screens/MyAccount';
import Reports from '../screens/MyReports';

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
            case 'Account':
              return <FontAwesome5 name="user-alt" color={color} size={18} />;
            case 'Main':
              return <FontAwesome name="plus-circle" color={color} size={22} />;
            case 'Reports':
              return <FontAwesome name="map-marker" color={color} size={22} />;
          }
        },
      })}
    >
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Reports" component={Reports} />
    </Tab.Navigator>
  );
}
