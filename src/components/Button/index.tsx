import React from 'react';
import { Container, Label } from './styles';

interface Props {
  children: string;
}

export default function Button({ children }: Props) {
  return (
    <Container>
      <Label>{children}</Label>
    </Container>
  );
}
