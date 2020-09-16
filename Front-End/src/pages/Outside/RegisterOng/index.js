import React, { useState, useEffect } from 'react';

import { Feather } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import api from '../../../services/api';

import BGOng from '../../../assets/images/RegisterOng/BG.png';
import BGPerson from '../../../assets/images/RegisterPerson/BG.png';

import {
  CheckBox,
  ScrollView,
  Text,
  View,
} from 'react-native';

import Button      from '../../../components/Button';
import Info        from '../../../components/Info';
import ThreePoints from '../../../components/ThreePoints';

import {
  BackGround,
  CheckBoxContainer,
  CheckBoxText,
  CheckBoxes,
  Container,
  Footer,
  Forms,
  Header,
  HeaderTitle,
  ImageAvatar,
  Person,
  PlaceImage,
  PlaceImageOpacity,
  TextColor,
} from './styles';

export default function RegisterOng() {

  const [check1Select, setCheck1Select] = useState(false);
  const [check2Select, setCheck2Select] = useState(false);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email   ,    setEmail] = useState('');
  const [phone   ,    setPhone] = useState('');
  const [local   ,    setLocal] = useState('');
  const [avatar  ,   setAvatar] = useState();

  const navigation= useNavigation();
  const route = useRoute();
  const isOng = route.params.isOng;

  let primary = '#F17808'
  let gradient = ['#F17808','#FF8A00']
  let secundary = '#12947F'

  useEffect(() => {
    if (!isOng) {
      primary = '#12947F'
      gradient = ['#12947F','#0AB599']
      secundary = '#F17808'
    }
  }, [])

  function irParaTutorial() {
    navigation.reset({
      routes:[{name:'Tutorial1'}]
    })
  }

  async function UploadImage() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

      if (status != 'granted') {
        alert('Para continuar precisamos da sua permissão.');
        return;
      }
    }

    const imgAvatar = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      exif: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (imgAvatar.cancelled || !imgAvatar.uri) {
      setAvatar();
      return;
    }

    setAvatar(imgAvatar);
  }

  async function handleRegister() {
    // const file = new FormData();

    // let localUri = avatar.uri;
    // let filename = localUri.split('/').pop();
    // let match = /\.(\w+)$/.exec(filename);
    // let type = match ? `image/${match[1]}` : `image`;

    // await file.append({
    //   uri: localUri,
    //   name: filename,
    //   type
    // })

    const data = {
      fullName: userName,
      password,
      email,
      // phone,
      local,
    }

    let isEmpty = 0;
    Object.values(data).map(item => {
      if (item == '') {
        isEmpty = 1;
      }
    })

    if (isEmpty) {
      alert('Por favor, preencha todos os campos.');
      return
    }

    if (!check1Select) {
      alert('Termos de uso não aceitos.');
      return
    }

    try {
      await api.post('/api/ong', data);
      irParaTutorial();

      // await api.post('/api/ong', file, {
      //   headers: {
      //     'content-type': 'multipart/form-data',
      //   }
      // });
      //irParaTutorial();
    }

    catch (err) {
      alert(err.response.data)
      console.log(err.response.status)
      console.log(err.response.data)
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar style='light' backgroundColor='#ffffff'/>
      <BackGround source={isOng ? BGOng : BGPerson} >
        <Container>
          <Feather
            name='chevron-left'
            size={26}
            color='#A1A1A1'
            onPress={() => {navigation.goBack()}}
          />

        <Feather
            name='x'
            size={26}
            color='#FF0000'
            onPress={() => {navigation.navigate('Tutorial1')}}
          />

          <Header>
            <HeaderTitle>Crie sua conta{'\n'}no Adopet</HeaderTitle>
            <Person>
              <Text>Este cadastro se refere a
                <TextColor color={primary}>{isOng ? ' Ongs' : ' Pessoa física'}</TextColor>
              </Text>
            </Person>
          </Header>

          <PlaceImage>
            <PlaceImageOpacity onPress={UploadImage} >
              { avatar ?
                <ImageAvatar source={{uri: avatar.uri}} /> :
                <Feather name='camera' color={secundary} size={30}/>}
            </PlaceImageOpacity>
          </PlaceImage>

          <Forms>
            <Info
              image='user'
              placeholder='Digite seu Nome'
              onChangeText={userName => setUserName(userName)}
              defaultValue={userName}
              length={30}
              color={secundary}
            />
            <Info
              image='mail'
              placeholder='Digite seu E-mail'
              onChangeText={email => setEmail(email)}
              defaultValue={email}
              length={30}
              color={secundary}
            />
            <Info
              image='lock'
              placeholder='Digite sua Senha'
              onChangeText={password => setPassword(password)}
              defaultValue={password}
              password={1}
              length={15}
              color={secundary}
            />
            <Info
              image='phone'
              placeholder='Digite o telefone da Ong'
              onChangeText={phone => setPhone(phone)}
              defaultValue={phone}
              length={30}
              color={secundary}
            />
            <Info
              image='map-pin'
              placeholder='Digite o local da Ong'
              onChangeText={local => setLocal(local)}
              defaultValue={local}
              length={30}
              color={secundary}
            />
          </Forms>

          <Footer>
            <CheckBoxes>
              <CheckBoxContainer>
                <CheckBox
                  value={check1Select}
                  onValueChange={setCheck1Select}
                />
                <View>
                  <Text>Ao clicar em Cadastre-se, você concorda com </Text>
                    <CheckBoxText>
                      <Text>nossos</Text>
                      <TextColor color={primary}>Termos</TextColor>
                      <Text> e </Text>
                      <TextColor color={primary}>Política de Dados.</TextColor>
                    </CheckBoxText>
                </View>
              </CheckBoxContainer>

              <CheckBoxContainer>
                <CheckBox
                  value={check2Select}
                  onValueChange={setCheck2Select}
                />
                <Text>I accept the terms and privacy policy</Text>
              </CheckBoxContainer>
            </CheckBoxes>

            <Button
              height={50}
              text='Criar Minha Conta'
              colors={gradient}
              onPress={handleRegister}
            />

          </Footer>

          <ThreePoints
            points={[1,0,0]}
            color={primary}
          />

        </Container>
      </BackGround>
    </ScrollView>
  )
}
