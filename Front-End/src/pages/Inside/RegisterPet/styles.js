import styled from 'styled-components';
import Constants from 'expo-constants';

export const Background = styled.ImageBackground`
  flex: 1;
`

export const Container = styled.View`
  flex: 1;

  align-items: center;

  padding-top: ${Constants.statusBarHeight + 20}px;

  margin: 0 25px;
`

export const ImageArea = styled.View`
  width: 100%;

  align-items: center;

  margin-bottom: 15px;
`;

export const MainImage = styled.TouchableOpacity`
  width: 180px;
  height: 180px;

  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 25px;

  background: #FBFAFA;

  elevation: 10;
`;

export const ImagePet = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 25px;
`

export const MainImageText = styled.Text`
  font-size: 30px;
  color: #D2D0CF;

  text-align: center;
`;

export const SubImageArea = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

export const SubImage = styled.TouchableOpacity`
  width: 85px;
  height: 85px;

  align-items: center;
  justify-content: center;

  border-radius: 15px;

  background: #FBFAFA;

  elevation: 10;
`;

export const SubImagePet = styled.Image`
  width: 85px;
  height: 85px;
  border-radius: 15px;
`

export const SubImageText = styled.Text`
  font-size: 15px;
  color: #D2D0CF;

  text-align: center;
`;

export const Body = styled.View`
  width: 100%;
  flex: 1;
`;

export const TextArea = styled.View`
  flex: 1;
`;

export const TypeArea = styled.View`
  margin: 30px 0;
`;

export const Types = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: white;

  font-weight: bold;
  margin-bottom: 10px;
`

export const Line = styled.View`
  flex-direction: row;
`;

export const PickerView = styled.View`
  background: #E5E4E5;
  flex-direction: row;

  align-items: center;

  width: 100%;
  height: 40px;

  border-radius: 10px;

  padding-left: 5px;

  margin-top: 10px;

  elevation: 5;
`

export const CheckBoxArea = styled.View`
  margin: 30px 0;
`;

export const CheckBoxLine = styled.View`
  flex-direction: row;
`;
export const CheckBoxItem = styled.View`
  flex-direction: row;
  flex: 1;

  align-items: center;
`;

export const CheckBoxText = styled.Text`
  color: white;
`;

export const Footer = styled.View`
  flex: 1;

  align-items: center;

  margin-bottom: 25px;

`;

export const FooterText = styled.View``;

export const TagArea = styled.View`
  margin: 30px 0;

  width: 100%;
`

export const Tags = styled.ScrollView`
  flex: 1;

  margin-top: 10px;

  flex-direction: row;
`
