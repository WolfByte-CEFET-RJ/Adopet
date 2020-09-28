import styled from 'styled-components';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

export const Background = styled.ImageBackground`
  flex: 1;
`

export const Container = styled.View`
  flex: 1;
  align-items: center;

  padding-top: ${Constants.statusBarHeight}px;
`

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

export const Tag = styled.View`
  background: #FFE9E6;

  width: 60px;
  height: 20px;

  align-items: center;
  justify-content: center;

  margin-right: 15px;

  border-radius: 50px;
`

export const TagText = styled.Text`
  font-size: 16px;
  color: #FF6F59;
`

export const Title = styled.Text`
  font-size: 16px;
  color: white;

  font-weight: bold;
  margin-bottom: 10px;
`

export const FeaturesArea = styled.View`
  margin-bottom: 10px;
`

export const FeaturesGrid = styled.View`
  align-items: center;
  justify-content: center;
`

export const Item = styled.View`
  background: white;

  width: 100px;
  height: 72px;

  align-items: center;
  justify-content: center;

  margin: 5px;

  border-radius: 5px;

  elevation: 5;
`

export const ItemTitle = styled.Text`
  font-size: 10px;
  color: #F17808;
`

export const ItemText = styled.Text`
  font-size: 12px;
`

export const UserArea = styled.TouchableOpacity`
  margin-bottom: 20px;
`

export const UserAbout = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  flex-direction: row;

  padding: 10px;
`

export const UserImage = styled.Image`
  height: 60px;
  width: 60px;

  margin-right: 10px;

  border-radius: 30px;
`
export const UserTextArea = styled.View`
  flex: 1;
`

export const UserText = styled.Text`
  color: #1B262C;
  font-size: 10px;
`

export const UserName = styled(UserText)`
  font-size: 14px;
  margin-bottom: 5px;
`

export const Footer = styled.View`
  margin-bottom: 15px;
`

export const ButtonView = styled.View`
  margin-bottom: 15px;
`