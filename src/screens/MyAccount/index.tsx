import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { Container } from './styles';

export default function CreateAccount() {
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
