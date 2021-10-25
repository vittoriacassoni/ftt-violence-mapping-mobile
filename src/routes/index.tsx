import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';
import AuthRoutes from './app.routes';

const user = {
  id: 10,
  name: 'Vittoria',
  sobrenome: 'Cassoni',
};

export default function Routes() {
  return (
    <NavigationContainer>
      {!!user?.id && <AppRoutes />}
      {!user?.id && <AuthRoutes />}
    </NavigationContainer>
  );
}
