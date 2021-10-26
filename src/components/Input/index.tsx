import React from 'react';
import { TextInputProps, ViewStyle } from 'react-native';
import { InputComponent, Container, Label } from './styles';

interface Props extends TextInputProps {
  placeholder: string;
  containerStyle?: ViewStyle;
  label: string;
}

export default function Input({ placeholder, containerStyle, label }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputComponent placeholder={placeholder} style={containerStyle} />
    </Container>
  );
}
