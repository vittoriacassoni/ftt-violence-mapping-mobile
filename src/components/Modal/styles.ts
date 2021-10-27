import styled from 'styled-components/native';

interface InputComponentProps {
  isFocused: boolean;
}

export const Container = styled.Modal`
  flex: 1;
`;

export const Overlay = styled.View`
  background-color: rgba(0,0,0,0.3);
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Content = styled.View`
  background-color: #FFF;
  border-radius: 40px;
  width: 100%;
  padding: 16px;
  align-items: center;
`;

export const Title = styled.Text`
  color: #2C2C2C;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
  color: #757575;
  font-size: 15px;
  text-align: center;
`;




