import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;

  padding-top: ${Constants.statusBarHeight}px;

  background-color: #FAFBFD;
`;

export const Content = styled.View`
  flex: 1;
`

export const ImageBG = styled.Image`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.7;
`;

export const Icon = styled.Image`
  width: 320px;
  height: 320px;
  margin: 70px 0 0px;

`;

export const AdopetTitle = styled.Text`
  font-size: 38px;
  font-weight: 400;
  line-height: 47px;
  text-align: center;
  color:#12947F;
  margin-bottom: 100px;
`;

export const Body = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const ConatinerPoints = styled.View`
  position: relative;
  align-items: center;
  width: 100%;
`

export const NextPage = styled.Text`
  position: absolute;
  right: 0;
  top: 10px;
  font-weight: 300;
  margin-right: 20px;
  font-size: 25px;
  color: #12947F;

`
export const Skip = styled.Text`
  position: absolute;
  right: 0;
  top: 45px;
  z-index: 1000;
  font-weight: 400;
  margin-right: 20px;
  font-size: 25px;
  color: #AAAAAA

`