import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import Routes from './src/routes/';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from './src/shared/dtos/User';

export default function App() {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    async function getUserStorage() {
      const user = await AsyncStorage.getItem('@user_data');

      if (user !== null) {
        let obj: User = JSON.parse(user);

        setUser(obj);
      }
    }

    getUserStorage();
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Routes />
    </>
  );
}
