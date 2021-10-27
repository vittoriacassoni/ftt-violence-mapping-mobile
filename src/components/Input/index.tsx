import React, { useState } from 'react';
import { TextInputProps, ViewStyle } from 'react-native';
import { InputComponent, Container, Label } from './styles';

interface Props extends TextInputProps {
  placeholder: string;
  containerStyle?: ViewStyle;
  label: string;
  multiline?: boolean;
  numberOfLines?: number;
}

export default function Input({
  placeholder,
  containerStyle,
  label,
  multiline,
  numberOfLines,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container>
      <Label>{label}</Label>
      <InputComponent
        placeholder={placeholder}
        style={containerStyle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical="top"
      />
    </Container>
  );
}
