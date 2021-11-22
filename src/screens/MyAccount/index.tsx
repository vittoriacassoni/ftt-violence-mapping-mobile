import React, { useState, useEffect } from "react";
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { Container } from './styles';

import api from "../../services/api";

interface User {
  first_name: string;
  last_name: string;
  birth_date: string;
  contact: string;
}

export default function CreateAccount() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [contact, setContact] = useState('');

  async function saveProfile() {
    api.get<User>("/users")
    api.put("/users", {first_name: name.split(' ')[0], last_name: name.split(' ')[1], contact, birth_date: birthDate})
  }

  useEffect(() => {
    api.get<User>("/users").then(response => {
      setName(response.data.first_name + ' ' + response.data.last_name);
      setBirthDate(response.data.birth_date);
      setContact(response.data.contact);
    })
  },[])

  return (
    <Container>
      <Input
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Nome Completo"
        containerStyle={{ marginBottom: 16 }}
        label="Nome Completo"
      />

      <Input
        value={birthDate}
        onChangeText={text => setBirthDate(text)}
        placeholder="Data de Nascimento"
        containerStyle={{ marginBottom: 16 }}
        label="Data de Nascimento"
      />

      <Input
        value={contact}
        onChangeText={text => setContact(text)}
        placeholder="Contato"
        containerStyle={{ marginBottom: 16 }}
        label="Contato"
      />
      <Button onPress={saveProfile}>Salvar</Button>
    </Container>
  );
}
