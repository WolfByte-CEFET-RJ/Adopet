import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`

export const ClickView = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const ContainerModal = styled.View`
  background: #292929;

  width: 90%;
  height: 280px;

  border-radius: 30px;
  align-items: center;
`

export const Exit = styled.View`
  position: absolute;
  right: 20px;
  top: 20px;
`

export const Title = styled.Text`
  color: #FFF;
  font-size: 28px;
  text-align: center;
`

export const TitleStrong = styled(Title)`
  font-size: 38px;
  font-weight: bold;

  padding-bottom: 5px;
  margin-top: -10px;
`

export const Body = styled.View`
  background: #FFF;
  align-items: center;

  width: 100%;
  height: 235px;

  padding: 0 10px;

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`

export const BodyText = styled.Text`
  color: #292929;

  padding-top: 25px;
  padding-bottom: 10px;

  font-size: 16px;
  text-align: center;
`