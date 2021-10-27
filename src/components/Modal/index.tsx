import React, { ReactNode } from 'react';
import Button from '../Button';
import { Container, Overlay, Content, Title, Subtitle } from './styles';

interface Props {
  visible: boolean;
  children?: ReactNode;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonAction?(): void;
}

export default function Modal({
  visible,
  children,
  title,
  subtitle,
  buttonText,
  buttonAction,
}: Props) {
  return (
    <Container animationType="none" transparent={true} visible={visible}>
      <Overlay>
        <Content>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          {children}
          <Button
            containerStyle={{ marginTop: 16 }}
            buttonAction={buttonAction}
          >
            {buttonText}
          </Button>
        </Content>
      </Overlay>
    </Container>
  );
}
