import React, { useState } from "react";
import { View, ViewStyle } from "react-native";
import {
  IconArea,
  Container,
  Label,
  LabelLine,
  ImageContainer,
  TextContainer,
} from "./styles";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import LightButton from "../LightButton";

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
  const color = "#213C73";
  return (
    <Container onPress={() => setIsFocused(true)} isFocused={isFocused}>
      <ImageContainer />
      <TextContainer>
        <LabelLine>
          <IconArea>
            <FontAwesome5 name="calendar-day" color={color} size={16} />
          </IconArea>
          <Label>{date}</Label>
        </LabelLine>

        <LabelLine style={{ height: 50 }}>
          <IconArea>
            <FontAwesome name="map-marker" color={color} size={18} />
          </IconArea>
          <Label style = {{marginBottom: 32}}>{address}</Label>
        </LabelLine>
        {isFocused === true && (
        <LightButton buttonAction={buttonAction}>Ver detalhes</LightButton>
      )}
      </TextContainer>
    </Container>
  );
}
