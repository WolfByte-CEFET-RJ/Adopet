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

export const SubImageArea = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
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

  height: 48px;
  width: 40%;

  border-radius: 10px;

  padding-left: 5px;

  margin-top: 10px;

  margin-right: 10px;

  elevation: 5;
`

export const CheckBoxArea = styled.View`
  margin: 30px 0;
`;

export const CheckBoxLine = styled.View`
  flex-direction: row;
`;

export const Footer = styled.View`
  flex: 1;

  align-items: center;

  margin-bottom: 25px;

`;

export const FooterText = styled.View`
  width: 100%;
`;

export const TagArea = styled.View`
  margin: 30px 0;

  width: 100%;
`

export const Tags = styled.ScrollView`
  flex: 1;

  padding: 0 10px;

  margin: 10px -25px 0;

  flex-direction: row;
`

export const Yellow = styled.Text`
  color: ${props => props.value == 3 ? '#F4C724' : 'white' };
`