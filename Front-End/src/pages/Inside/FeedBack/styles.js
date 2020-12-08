import styled from 'styled-components';
import Constants from 'expo-constants';

export const Background = styled.ImageBackground`
  flex: 1;
`

export const Container = styled.View`
  flex: 1;

  margin-top: ${Constants.statusBarHeight}px;
`

export const Back= styled.View`
  position: absolute;
  top: 35px;
  left: 10px;

  z-index: 10;
`;

export const Body = styled.View`
  flex: 1;
`

export const Options = styled.View`
`

export const Option = styled.View`
  width: auto;
  flex-direction: row;
  margin: 110px 0px 0px 0px;
  align-items: center;
`
export const Line = styled.View`
  height: 50px;
  width: 7px;
  background: #FB9A21;
`

export const OptionText = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: bold;
  margin-left: 20px;
`

export const Text = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
  margin-top: 25px;
`

export const Version = styled.Text`
  position: absolute;
  left: 20px;
  bottom: 50px;

  color: white;
`