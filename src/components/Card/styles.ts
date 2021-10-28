import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface CardComponentProps {
  isFocused: boolean;
}

export const Container = styled(TouchableOpacity)<CardComponentProps>`
  background-color: #FFF;
  border-radius:15px;
  height: 344px;
  flex-direction: column;
  margin-bottom: 16px;

  ${(props) => props.isFocused && css`
  border: 2px solid #213C73
  `}
`;

export const IconArea = styled.View`
  height: 15px;
  width: 15px;
  margin-right: 8px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #2C2C2C;
`;

export const LabelLine = styled.Text`
  flex-direction: row;
  align-items: center;
  margin: 8px 0;
  flex: 1;
`;

export const ImageContainer = styled.View`
  flex: 2;
  background-color: #E9E9E9;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const TextContainer = styled.View`
  flex: 2;
  padding:16px;
 
`;

