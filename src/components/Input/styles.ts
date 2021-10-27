import styled, { css } from 'styled-components/native';
import {TextInput} from 'react-native';

interface InputComponentProps {
  isFocused: boolean;
}


export const InputComponent = styled(TextInput).attrs({
  placeholderTextColor: "#9F9F9F"
})<InputComponentProps>`
  background-color: #EEEEEE;
  border-radius: 15px;
  height: 50px;
  width: 100%;
  padding: 16px;

  ${(props) => props.isFocused && css`
    border: 2px solid #AEAEAE
  `}
`;

export const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;


export const Label = styled.Text`
  font-size: 15px;
  color: #272727;
  margin-bottom: 8px;
`;




