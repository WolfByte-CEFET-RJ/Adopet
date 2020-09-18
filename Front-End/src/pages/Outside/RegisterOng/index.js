import React, { useState, useEffect } from 'react';

import { Feather } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import api from '../../../services/api';

import BGOng    from '../../../assets/images/RegisterOng/BG.png';
import BGPerson from '../../../assets/images/RegisterPerson/BG.png';

import {
  CheckBox,
  ScrollView,
  Text,
  View,
} from 'react-native';

import Button      from '../../../components/Button';
import Info        from '../../../components/Info';

import {
  Back,
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
  Strong,
  TextColor,
} from './styles';

export default function RegisterOng() {

  const [check1Select, setCheck1Select] = useState(false);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email   ,    setEmail] = useState('');
  const [phone   ,    setPhone] = useState('');
  const [local   ,    setLocal] = useState('');
  const [avatar  ,   setAvatar] = useState();

  const [primary   ,    setPrimary] = useState('#F17808');
  const [secundary ,  setSecundary] = useState('#12947F');
  const [gradient  ,   setGradient] = useState(['#F17808','#FF8A00']);

  const navigation= useNavigation();
  const route = useRoute();
  const isOng = route.params.isOng;

  useEffect(() => {
    if (!isOng) {
      setPrimary('#12947F');
      setSecundary('#F17808');
      setGradient(['#12947F','#0AB599']);
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
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (imgAvatar.cancelled || !imgAvatar.uri) {
      setAvatar();
      return;
    }

    setAvatar(imgAvatar);
  }

  async function handleRegister() {
    if (!avatar) {
      alert('Coloque uma foto, por favor.');
      return
    }

    let localUri = avatar.uri;
    let filename = localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    const img = {
      uri: avatar.uri,
      name: filename,
      type: type
    }

    const data = new FormData();
    data.append('fullName', userName);
    data.append('password', password);
    data.append('email'   ,    email);
    data.append('local'   ,    local);
    data.append('img'     ,      img);

    let isEmpty = 0;
    Object.values(data)[0].map(item => {
      if (item[1] == '') {
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
      await api.post('/api/ong', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Cadastro feito com sucesso.');
      irParaTutorial();
    }

    catch (err) {
      alert(err.response.data)
      console.log(err.response.status)
      console.log(err.response.data)
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <Back>
        <Feather
          name='chevron-left'
          size={26}
          color='#A1A1A1'
          onPress={() => {navigation.goBack()}}
        />

        <Feather
          name='x'
          size={26}
          color={'#ff0000cb'}
          onPress={() => navigation.navigate('Tutorial1')}
        />
      </Back>
      <BackGround source={isOng ? BGOng : BGPerson} >
        <Container>

          <Header>
            <HeaderTitle>Crie sua conta{'\n'}no <Strong>Adopet</Strong></HeaderTitle>
            <Person>
              <Text>Este cadastro se refere a
                <TextColor color={primary}>{isOng ? ' Ongs' : ' Pessoa Física'}</TextColor>
              </Text>
            </Person>
          </Header>

          <PlaceImage>
            <PlaceImageOpacity onPress={UploadImage} >
              { avatar ?
                <ImageAvatar source={{uri: avatar.uri}} /> :
                <Feather name='camera' color={secundary} size={60}/>}
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
                      <Text>nossos </Text>
                      <TextColor color={secundary}>Termos</TextColor>
                      <Text> e </Text>
                      <TextColor color={secundary}>Política de Dados.</TextColor>
                    </CheckBoxText>
                </View>
              </CheckBoxContainer>
            </CheckBoxes>

            <Button
              height={50}
              text='Criar Minha Conta'
              colors={gradient}
              onPress={handleRegister}
            />

          </Footer>
        </Container>
      </BackGround>
    </ScrollView>
  )
}
