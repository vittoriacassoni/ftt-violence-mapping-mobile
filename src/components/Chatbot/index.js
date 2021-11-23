import React, { Component, useState } from 'react';
import { Text, View } from 'react-native';
import Bot from 'react-native-chatbot';
import { useAuth } from '../../hooks/auth';

export default function ChatBot() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const steps = [
    {
      id: '1',
      message: 'Seja bem vinda, deseja criar uma conta ou fazer login?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Criar Conta', trigger: '3' },
        { value: 2, label: 'Fazer Login', trigger: '20' },
      ],
    },
    {
      id: '3',
      message: 'Primeiro me diga como gostaria de ser chamada? (Nome Completo)',
      trigger: '4',
      placeholder: 'Digite seu nome completo',
    },
    {
      id: '4',
      user: true,
      trigger: '5',
    },
    {
      id: '5',
      message: 'Perfeito, seja bem-vinda {previousValue}. Qual o seu email?',
      trigger: '6',
      placeholder: 'Digite seu email no formato email@email.com',
    },
    {
      id: '6',
      user: true,
      trigger: '7',
    },
    {
      id: '7',
      message: 'E quando você nasceu?',
      trigger: '8',
      placeholder: 'Digite sua data de nascimento no formato dd/mm/yyyy',
    },
    {
      id: '8',
      user: true,
      trigger: '9',
    },
    {
      id: '9',
      message: 'E por fim qual o número do seu celular?',
      trigger: '10',
      placeholder: 'Digite seu celular no formato (11) 99999-9999',
    },
    {
      id: '10',
      user: true,
      trigger: '11',
    },
    {
      id: '11',
      message:
        'Muito obrigada, estamos ansiosos por ter você por aqui, espero que o aplicativo te ajude!',
      end: true,
    },
    {
      id: '20',
      message:
        'Perfeito, seja bem-vinda de volta, nos informe o seu e-mail cadastrado.',
      trigger: '21',
      placeholder: 'Digite seu e-mail no formato email@email.com',
    },
    {
      id: '21',
      user: true,
      trigger: '22',
      validator: (value) => {
        setEmail(value);
        return true;
      },
    },
    {
      id: '22',
      message: 'Agora, por favor, digite a sua senha.',
      trigger: '23',
    },
    {
      id: '23',
      user: true,
      trigger: '24',
      trigger: '22',
      validator: (value) => {
        signIn({ email, password: value });
        return true;
      },
    },
    {
      id: '24',
      message: 'Muito obrigada pelas informações, aproveite o aplicativo!',
      end: true,
    },
  ];

  return (
    <Bot
      steps={steps}
      hideUserAvatar={true}
      // Cores dos diálogos //
      botFontColor={'#FFF'}
      userFontColor={'#272727'}
      botBubbleColor={'#213C73'}
      userBubbleColor={'#EEEEEE'}
      optionBubbleColor={'#213C73'}
      // Cores do fundo do chat //
      style={{ backgroundColor: '#FFFFFF', marginTop: 2 }}
      contentStyle={{ backgroundColor: '#FFFFFF' }}
      // Cores das bolhas de opções
      bubbleOptionStyle={{ backgroundColor: '#213C73', color: '#FFF' }}
      // Estilo do Rodapé (Footer) //
      footerStyle={{
        backgroundColor: '#FFF',
        margin: 5,
        padding: 1,
        border: 0,
        borderRadius: 7,
        elevation: 2,
        color: '#FFF',
      }}
      submitButtonStyle={{
        backgroundColor: '#213C73',
        borderRadius: 4,
        width: 63,
        margin: 2,
        color: '#FFF',
      }}
      floatingIcon={
        <View>
          <Text>TESTE</Text>
        </View>
      }
    />
  );
}
