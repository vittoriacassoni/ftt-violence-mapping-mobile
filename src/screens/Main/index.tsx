import React from 'react';
import { View, Text } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Input
        placeholder="Nome"
        containerStyle={{ marginBottom: 16 }}
        label="Nome Completo"
      />

      <Input
        placeholder="Sobrenome"
        containerStyle={{ marginBottom: 16 }}
        label="Sobrenome"
      />

      <Input
        placeholder="Idade"
        containerStyle={{ marginBottom: 16 }}
        label="Idade"
      />

      <Input
        placeholder="Contato"
        containerStyle={{ marginBottom: 16 }}
        label="Contato"
      />
      <Button>Salvar</Button>
    </Container>
  );
}
