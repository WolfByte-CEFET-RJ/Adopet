import styled from 'styled-components/native';
import Constants from 'expo-constants';

const status_bar = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #FFF;
  padding-top: 25;
  padding-left: 12;
  padding-right: 12;
`

export const BackGround = styled.Image`
  position: absolute;
  left: 0;
  top: 25%;
`

export const Header = styled.View`
  margin-left: 16;
`

export const HeaderTitle = styled.Text`
  font-size: 24;
  color: #1B262C;
  margin-bottom: 10;
`

export const Person = styled.View`
  flex-direction: row;
`

export const PersonText = styled.Text`
  color: #12947F;
`

export const PlaceImage = styled.View`
  height: 88;

  align-items: center;
  justify-content: center;

  margin-top: 24;
`

export const PlaceImageOpacity = styled.TouchableOpacity`
  background: #E2E2E2;
  height: 88;
  width: 88;

  border-radius: 44;

  justify-content: center;
  align-items: center;
`

export const CheckBoxes = styled.View`
  justify-content: space-between;
`

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const CheckBoxText = styled.View`
  flex-direction: row;
`

export const Orange = styled.Text`
  color: #F17808;
`

export const BtCreate = styled.TouchableOpacity`
  border-radius: 5;

  justify-content: center;
  align-items: center;

  height: 50;
`

export const BtCreateText = styled.Text`
  font-size: 15;
  color: #FFF;
`

export const Footer = styled.View`
  align-items: center;
  margin-top: 10;
  flex-direction: column;
  justify-content: space-between;
  height: 140;
  padding-bottom: 10;
`

export const Page = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const Points = styled.View`
  margin-top: 20;
  margin-bottom: 20;

  width: 50;
  height: 15;

  flex-direction: row;
  justify-content: space-around;

  align-items: center;
`
