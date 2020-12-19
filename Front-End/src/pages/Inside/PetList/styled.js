import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
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

export const TopContainer = styled.View`
  flex: 1;

  justify-content:space-between;
  flex-direction: row;

  margin: 60px 0 30px;

`;

export const InputArea = styled.View`
  position: relative;
  flex: 1;

  width: 90%;

  margin: 0 5% 0px;
`;

export const InputImage = styled.View`
  position: absolute;
  right: 20px;
`;

export const InputText = styled.TextInput`
  font-size: 20px;
  color: #FFF;

  border-bottom-color: #FFF;
  border-bottom-width: 2px;

  padding: 8px 5px;
`;

export const PetSection = styled.View`
  flex: 1;
  width: 100%;

  justify-content: center;
  flex-wrap: wrap;

  margin:50px 2% 20px;
`;

export const PetAreaHeader = styled.View`
  flex-direction: row;
`

export const AnimalList = styled.FlatList`
`;

export const PetArea = styled.View`
  margin: 5px;
`;
