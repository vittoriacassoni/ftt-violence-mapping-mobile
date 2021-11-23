import React, { useMemo, useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

import LightButton from '../LightButton';

import {
  IconArea,
  Container,
  Label,
  LabelLine,
  Body,
  ImageContainer,
  TextContainer,
  DetailsButton,
  DetailsButtonText,
} from './styles';

interface Props {
  date: string;
  containerStyle?: ViewStyle;
  address: string;
  buttonAction?(): void;
}

export default function Card({
  date,
  containerStyle,
  address,
  buttonAction,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const color = '#213C73';

  const formattedDate = useMemo(() => {
    return format(new Date(date), 'dd/MM/yyyy', {
      locale: ptBR,
    });
  }, []);
  return (
    <Container
      style={{
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      }}
      onPress={() => setIsFocused(true)}
      isFocused={isFocused}
    >
      <ImageContainer />
      <Body>
        <TextContainer>
          <LabelLine>
            <IconArea>
              <FontAwesome5 name="calendar-day" color={color} size={16} />
            </IconArea>
            <Label numberOfLines={3}>{formattedDate}</Label>
          </LabelLine>

          <LabelLine>
            <IconArea>
              <FontAwesome name="map-marker" color={color} size={18} />
            </IconArea>
            <Label numberOfLines={3}>{address}</Label>
          </LabelLine>
        </TextContainer>

        {isFocused === true && (
          <DetailsButton onPress={buttonAction}>
            <DetailsButtonText>Detalhes</DetailsButtonText>
          </DetailsButton>
        )}
      </Body>
    </Container>
  );
}
