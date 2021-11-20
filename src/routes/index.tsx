import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { User } from '../shared/dtos/User';

const user = {
  id: undefined,
  name: 'Vittoria',
  sobrenome: 'Cassoni',
};

export default function Routes() {
  //user: User) {
  return (
    <NavigationContainer>
      {!!user?.id && <AppRoutes />}
      {!user?.id && <AuthRoutes />}
    </NavigationContainer>
  );
}
