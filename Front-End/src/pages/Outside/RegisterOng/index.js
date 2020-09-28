import React, { useState, useEffect } from 'react';

import { Feather } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Picker } from '@react-native-community/picker';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import * as Location from 'expo-location';

import axios from 'axios';
import api from '../../../services/api';

import BGOng    from '../../../assets/images/RegisterOng/BG.png';
import BGPerson from '../../../assets/images/RegisterPerson/BG.png';

import {
  CheckBox,
  ScrollView,
  Text,
  View,
} from 'react-native';

import Button from '../../../components/Button';
import Info   from '../../../components/Info';

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
  PickerView,
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
  const [ufs     ,      setUfs] = useState([]);
  const [cities  ,   setCities] = useState([]);

  const [selectedUf   ,   setSelectedUf] = useState('0');
  const [selectedCity , setSelectedCity] = useState('0');
  const [enableCity   ,   setEnableCity] = useState(false);

  const [coords, setCoords] = useState('');

  const [avatar  ,   setAvatar] = useState();

  const [primary   ,    setPrimary] = useState('#F17808');
  const [secundary ,  setSecundary] = useState('#12947F');
  const [gradient  ,   setGradient] = useState(['#F17808','#FF8A00']);
  const [type      ,       setType] = useState('user');

  const navigation= useNavigation();
  const route = useRoute();
  const isOng = route.params.isOng;

  useEffect(() => {
    if (!isOng) {
      setPrimary('#12947F');
      setSecundary('#F17808');
      setGradient(['#12947F','#0AB599']);
      setType('ong');
    }
  }, [])

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Por favor', 'Precisamos de sua permissão para obter a localização');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setCoords(`{\"latitude\":\"${latitude}\", \"longitude\":\"${longitude}\"}`);
      console.log(location);
    }

    loadPosition();
  }, []);

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        const ufInitials = response.data.map(uf => uf.sigla);
        setUfs(ufInitials);
      })
  }, [])

  useEffect(() => {
    if (selectedUf === '0') {
      setEnableCity(false);
      return setCities([]);
    }

    setEnableCity(false);
    axios
      .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome);
        setCities(cityNames);
        setEnableCity(true);
      })

  }, [selectedUf]);

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

    if (selectedUf === '0' || selectedCity === '0') {
      alert('Por favor, selecione uma cidade e estado.');
      return
    }

    let localUri = avatar.uri;
    let filename = localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let imageType = match ? `image/${match[1]}` : `image`;

    const img = {
      uri: avatar.uri,
      name: filename,
      type: imageType
    }

    const local = `${selectedUf}, ${selectedCity}`;

    const data = new FormData();
    data.append('fullName'    , userName);
    data.append('password'    , password);
    data.append('email'       ,    email);
    data.append('phone'       ,    phone);
    data.append('local'       ,    local);
    data.append('local_coords',   coords);
    data.append('type'        ,     type);
    data.append('img'         ,      img);

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
      await api.post('api/user/register', data, {
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
          onPress={() => navigation.navigate('MainTab')}
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

            <PickerView>
              <Feather name="map-pin" size={26} color={secundary}/>

              <Picker style={{flex: 1, color:`${selectedUf === '0' ? '#BEBDC2' : '#000'}`}}
                selectedValue={selectedUf}
                onValueChange={uf => {setSelectedUf(uf)}}
              >
                <Picker.Item label="UF" value="0" />
                {ufs.map(uf => (
                  <Picker.Item key={uf} label={uf} value={uf} />
                ))}
              </Picker>

              <Picker style={{flex: 2, color:`${selectedCity === '0' ? '#BEBDC2' : '#000'}`}}
                selectedValue={selectedCity}
                onValueChange={city => {setSelectedCity(city)}}
                enabled={enableCity}
              >
                <Picker.Item label="Cidade" value="0" />
                {cities.map(city => (
                  <Picker.Item key={city} label={city} value={city} />
                ))}
              </Picker>
            </PickerView>
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
