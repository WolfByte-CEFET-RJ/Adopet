import styled from 'styled-components/native';

export const Background= styled.ImageBackground`
  flex: 1;
`;

export const Container= styled.SafeAreaView`
  flex: 1;
`;

export const TextInicial= styled.View`
  justify-content: center;
  margin: 80px 30px 100px 30px;
`;

export const Header= styled.Text`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  color:#1B262C;
`;

export const AdopetTitle= styled.Text`
  margin-bottom: 20px;
  font-size: 38px;
  font-weight: bold;
  line-height: 47px;
  color:#1B262C;
`;

export const Description= styled.Text`
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color:#7B7F9E;
`;

export const Buttons = styled.View`
  justify-content: space-between;
  align-items: center;
  height: 140px;
`;