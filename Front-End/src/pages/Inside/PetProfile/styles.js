import styled from 'styled-components';
import Constants from 'expo-constants';

export const Background = styled.ImageBackground`
  flex: 1;
`

export const Container = styled.View`
  flex: 1;
  align-items: center;

  padding-top: ${Constants.statusBarHeight}px;
`

export const Back = styled.View`
  position: absolute;
  top: 15px;

  z-index: 10;
`;

export const PetImageArea = styled.View`
  background: white;

  width: 100%;

  margin-bottom: 20px;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  elevation: 15;
`

export const SwipeImage = styled.Image`
  height: 350px;
  width: 100%;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const Dots = styled.View`
  height: 5px;
  width: 20px;

  background: ${props => props.active};

  margin-left: -3px;

  border-radius: 5px;
`

export const PetInfoArea = styled.View`
  position: absolute;

  bottom: 10px;
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
`

export const PetTextArea = styled.View``

export const PetName = styled.Text`
  color: white;
  font-size: 24px;
`

export const PetInfo = styled(PetName)`
  font-size: 16px;
`

export const Body = styled.View`
  flex: 1;

  width: 100%;

  padding: 0 10px;
`

export const AboutArea = styled.View`
  margin-bottom: 10px;
`

export const AboutText = styled.Text`
  font-size: 16px;
  color: #1B262C;
`

export const TagArea = styled.View`
  margin-bottom: 10px;
`

export const Tags = styled.ScrollView`
  flex: 1;

  flex-direction: row;
`

export const Title = styled.Text`
  font-size: 16px;
  color: white;

  font-weight: bold;
  margin-bottom: 10px;
`

export const UserInterestArea = styled.View`
  height: 80px;
  width: 100%;
`;

export const FeaturesArea = styled.View`
  margin-bottom: 10px;
`

export const UserArea = styled.View`
  margin-bottom: 20px;
`

export const Footer = styled.View`
  margin-bottom: 15px;
`

export const ButtonView = styled.View`
  margin-bottom: 15px;
`