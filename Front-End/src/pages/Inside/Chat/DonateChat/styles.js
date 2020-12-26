import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
`;

export const Title = styled.Image`
`;

export const HeaderTitle = styled.View`
  flex-direction: row;
`;

export const Message = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const BottomDonate = styled.TouchableOpacity`
  background-color:#E4EEED;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 80px;
  margin: 5px 0px;
`;

export const BottomAdopt = styled(BottomDonate)`
  background-color:#C4D0CF;
`;

export const Adopt = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ListView = styled.View`
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-around;
`;

export const Donate = styled(Adopt)`
`;

export const PetArea = styled.View`
`;

export const PetsName = styled.TouchableOpacity`
  flex-direction: row;
  background: red;
  width: 100%;
`;

export const Body = styled.FlatList`
`;