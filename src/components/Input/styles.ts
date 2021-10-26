import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const InputComponent = styled(TextInput).attrs({
  placeholderTextColor: "#9F9F9F"
})`
  background-color: #EEEEEE;
  border-radius: 15px;
  height: 50px;
  width: 100%;
  padding: 16px;
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




