import styled from 'styled-components/native';

export const Background= styled.SafeAreaView`
  flex: 1;
  background-color: #FAFBFD;
  height:100%;
  width:100%;
`;

export const ImagePatas= styled.Image`
  position: absolute;
  top: 0%;
  height: 100%;
  width: 100%;
`;

export const Icon= styled.Image`
  position: absolute;

  justify-content: center;
  align-items: center;

  left: 75px;
  top: 40%;
`;

export const AdopetTitle= styled.Text`
  position: absolute;
  left: 8%;
  top: 18%;

  font-size: 24px;
  font-weight: bold;
  line-height: 47px;
  color:#1B262C;
`;

export const Description= styled.Text`
  position: absolute;
  left: 8%;
  top: 26%;

  font-weight: 400;
  font-size: 18px;
  color:#7B7F9E;
`;

export const Button1= styled.TouchableOpacity`
  position: absolute;

  left: 8.06%;
  top: 75%;
  width: 83.88%;
  border-radius: 10px;

  align-Items: center;

`
export const Page = styled.View`
  position: absolute;
  justify-content: space-around;
  top: 90%;
  left: 43%;
`

export const Points = styled.View`
  width: 50px;
  height: 15px;

  flex-direction: row;
  justify-content: space-around;

  align-items: center;
`