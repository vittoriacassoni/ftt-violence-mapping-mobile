import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import Routes from './src/routes/';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}
