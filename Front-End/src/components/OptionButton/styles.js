import styled from 'styled-components/native';

export const Option = styled.View`
  align-items: center;
`;

export const OptionBackground = styled.TouchableOpacity`
  background: ${props => props.background};

  width: 100px;
  height: 100px;

  align-items: center;
  justify-content: center;

  border-radius: 50px;

  margin-bottom: 10px;
`;

export const OptionImage = styled.Image`
  width: 65px;
  height: 65px;
`;

export const OptionName = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;