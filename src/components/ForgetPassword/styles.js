import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  margin: 15px;

  align-items: center;
  justify-content: center;
`

export const ContainerModal = styled.View`
  background: #292929;

  border-radius: 30px;
  align-items: center;

  width: 100%;
  height: 280px;
`

export const Title = styled.Text`
  color: #FFF;
  font-size: 28px;
  text-align: center;
`

export const Subtitle = styled.Text`
  color: #FFF;
  font-size: 38px;

  padding-bottom: 5px;
  margin-top: -10px;

  text-align: center;
`

export const Body = styled.View`
  background: #FFF;
  align-items: center;

  width: 100%;
  height: 235px;

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