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

export const TitlePets = styled.Text`
  font-size: 38px;
  color: #FFF;

`;

export const Div = styled.View`

  margin-left: 10px;
`;
export const IconAddPet = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;
export const TopContainer= styled.View`
  margin: 60px 0 30px;
  flex: 1;
  justify-content:space-between;
  flex-direction: row;

`;


export const InputArea = styled.View`
  flex: 1;
  width: 90%;  
  position: relative;
  margin: 0 5% 0px;
`;

export const InputImage = styled.View`
  position: absolute;
  right: 20px;

`;

export const InputText = styled.TextInput`
  padding: 8px 5px;
  border-bottom-color: #FFF;
  border-bottom-width: 2px;
  font-size: 20px;
  color: #FFF;
  
`;

export const AnimalSection = styled.View`
  flex: 1;
  flex-wrap: wrap;
  margin:50px 5% 20px;
  flex-direction: row;
  justify-content: space-between;

  width: 90%;

`;

