import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/Login';

export default function AppRoutes() {
  return (
    <View>
      <Main />
    </View>
  );
}
