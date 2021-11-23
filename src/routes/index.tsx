import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { User } from '../shared/dtos/User';
import { useAuth } from '../hooks/auth';

export default function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {!!user?.id && <AppRoutes />}
      {!user?.id && <AuthRoutes />}
    </NavigationContainer>
  );
}
