import React from 'react';
import { ViewStyle } from 'react-native';
import { Container, Label } from './styles';

interface Props {
  children: string;
  containerStyle?: ViewStyle;
  buttonAction?(): void;
}

export default function LightButton({
  children,
  containerStyle,
  buttonAction,
}: Props) {
  return (
    <Container style={containerStyle} onPress={buttonAction}>
      <Label>{children}</Label>
    </Container>
  );
}
