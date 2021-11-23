import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface CardComponentProps {
  isFocused: boolean;
}

export const Container = styled(TouchableOpacity)<CardComponentProps>`
  background-color: #fff;
  border-radius: 15px;
  height: 256px;
  flex-direction: column;
  margin-bottom: 16px;

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #213c73;
    `}
`;

export const IconArea = styled.View`
  margin-right: 8px;
  width: 18px;
  height: 18px;
`;

export const Label = styled.Text`
  flex: 1;
  font-size: 15px;
  color: #2c2c2c;
`;

export const LabelLine = styled.View`
  flex-direction: row;
  margin: 8px 0;
`;

export const ImageContainer = styled.View`
  height: 125px;
  background-color: #e9e9e9;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const TextContainer = styled.View`
  width: 65%;
`;

export const Body = styled.View`
  padding: 16px;

  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailsButton = styled(RectButton)`
  height: 32px;
  padding: 0 8px;

  border-radius: 8px;

  justify-content: center;
  align-items: center;
  align-self: flex-end;

  background-color: #213c73;
`;

export const DetailsButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
`;
