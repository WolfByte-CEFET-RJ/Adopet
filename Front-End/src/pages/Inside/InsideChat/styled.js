import styled from 'styled-components/native';



export const Container= styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;


export const Background= styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const ProfileName = styled.Text`
  font-size: 26px;
  color: #000;  
  margin: 10px 0 0 10px;
`;

export const Div = styled.View`
  margin-top: 10px;
  flex: 1;
  flex-direction: row;
`;

export const DivFeather = styled.View`
  margin-top: 10px;

`

export const DivFlex = styled.View`
  z-index: 2;
  flex: 1;
  flex-direction: row;
  margin-bottom:50px;
`
export const Profile = styled.Image`
  width: 60px;
  height: 60px;
  margin-left: 10px;
`;
export const TopContainer= styled.View`
  margin: 10px 0 0;
  width: 80%;
  height: 70px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  justify-content:space-between;
  flex-direction: row;
  background: #fff;
`;

export const DenunciaImg = styled.Image`
  width: 40px;
  height: 40px;
  margin: 26px 0 0 20px;
`

export const InputArea = styled.View`
  z-index: 2;
  flex:1;
  align-content: flex-end;
  width: 90%;  
  margin: 30px 5% 0px;
  
`;

export const InputImage = styled.View`
  margin-top: 8px;
  position: absolute;
  left: 20px;
  z-index: 2;
`;

export const MessageArea = styled.View`
  z-index: 1;
  height: 80%;

`;



export const InputButton = styled.View`
  margin-top: 8px;
  position: absolute;
  right: 20px;
  z-index: 2;
`
export const Buttom = styled.View`
  margin-top: 2px;
  background: #F38F32;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  z-index: 2;
`

export const PataImage = styled.Image`
 
  margin-left: 5px;
  margin-top: 5px;
  width:25px;
  height: 25px;
`

export const InputText = styled.TextInput`
  height: 55px;
  padding: 15px 80px;
  background: #fff;
  border-radius: 30px;
  font-size: 20px;
  color: #000;
  z-index: 1;
`;


