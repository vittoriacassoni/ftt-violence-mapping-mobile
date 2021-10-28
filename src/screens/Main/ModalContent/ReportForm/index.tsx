import React, { useState } from 'react';
import { ViewStyle } from 'react-native';
import { Container } from './styles';
import Input from '../../../../components/Input';

interface Props {
  containerStyle?: ViewStyle;
  setAddress(adress: string): void;
  setDate(date: string): void;
  setDescription(description: string): void;
}

export default function ReportForm({
  containerStyle,
  setAddress,
  setDate,
  setDescription,
}: Props) {
  return (
    <Container style={containerStyle}>
      <Input
        placeholder="Local"
        containerStyle={{ marginBottom: 16 }}
        label="Local"
        onChangeText={(text) => {
          setAddress(text);
        }}
      />

      <Input
        placeholder="00/00/0000"
        containerStyle={{ marginBottom: 16 }}
        label="Data e Hora"
        onChangeText={(text) => setDate(text)}
      />

      <Input
        placeholder="Descrição"
        containerStyle={{ marginBottom: 16, height: 128 }}
        label="Descrição"
        multiline={true}
        numberOfLines={4}
        onChangeText={(text) => setDescription(text)}
      />
    </Container>
  );
}
