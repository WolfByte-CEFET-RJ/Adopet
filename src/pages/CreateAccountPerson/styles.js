import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #FFF;
  padding-top: 20px;
  padding-left: 12px;
  padding-right: 12px;
`

export const BackGround = styled.Image`
  position: absolute;
  left: 0%;
  top: 25%;
`

export const Header = styled.View`
  margin-left: 16px;
`

export const HeaderTitle = styled.Text`
  font-size: 24px;
  color: #1B262C;
  margin-bottom: 10px;
`

export const Person = styled.View`
  flex-direction: row;
`

export const PersonText = styled.Text`
  color: #12947F;
`

export const Forms = styled.View`
  justify-content: center;
  align-items: center;
`

export const PlaceImage = styled.View`
  height: 88px;

  align-items: center;
  justify-content: center;

  margin-top: 24px;
`

export const PlaceImageOpacity = styled.TouchableOpacity`
  background: #E2E2E2;
  height: 88px;
  width: 88px;

  border-radius: 44px;

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

export const Footer = styled.View`
  height: 140px;

  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  padding-bottom: 10px;
  margin-top: 10px;
`

export const Page = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const Points = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;

  width: 50px;
  height: 15px;

  flex-direction: row;
  justify-content: space-around;

  align-items: center;
`
