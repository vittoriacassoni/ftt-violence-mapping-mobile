import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import Card from '../../components/Card';

import api from '../../services/api';

import { Container, Title } from './styles';

interface Report {
  ID: number;
  Latitude: string;
  Longitude: string;
  Address: string;
  CEP: string;
  Date: string;
  Description: string;
  Type: number;
  ID_USER: string;
}

export default function Reports() {
  const [reports, setReports] = useState<Report[]>([]);

  useFocusEffect(
    useCallback(() => {
      api
        .get('/report/user')
        .then((response) => {
          setReports(response.data);
        })
        .catch((error) => console.log(error.response));
    }, [])
  );

  return (
    <Container>
      <Title>Meus Reportes</Title>
      <View
        style={{
          borderBottomColor: '#213C73',
          borderBottomWidth: 2,
          marginBottom: 16,
          width: 40,
          marginLeft: 16,
        }}
      />

      <FlatList
        data={reports}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
        keyExtractor={(item) => `report-${item.ID}`}
        renderItem={({ item }) => (
          <Card date={item.Date} address={item.Address} />
        )}
      />
    </Container>
  );
}
