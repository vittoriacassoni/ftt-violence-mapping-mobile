import React, { useState } from 'react';
import { ViewStyle } from 'react-native';
import { Container } from './styles';
import Input from '../../../../components/Input';

interface Props {
  containerStyle?: ViewStyle;
}

export default function ReportForm({ containerStyle }: Props) {
  return (
    <Container style={containerStyle}>
      <Input
        placeholder="Local"
        containerStyle={{ marginBottom: 16 }}
        label="Local"
      />

      <Input
        placeholder="Data e hora"
        containerStyle={{ marginBottom: 16 }}
        label="Data e Hora"
      />

      <Input
        placeholder="Descrição"
        containerStyle={{ marginBottom: 16, height: 128 }}
        label="Descrição"
        multiline={true}
        numberOfLines={4}
      />
    </Container>
  );
}
