import React, { useState, useEffect } from 'react';

import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation, useRoute } from '@react-navigation/native';

import { ScrollView, View } from 'react-native';

import Swiper from 'react-native-swiper';

import { FontAwesome, Feather } from '@expo/vector-icons';

import ProfileBG from '../../../assets/images/Profile/ProfileBG.png'

import UserImageExample from '../../../assets/images/PetProfile/user_example.png';
import UserImageExample2  from '../../../assets/images/Profile/user.png';

import Buttom       from '../../../components/Button';
import UserCard     from '../../../components/UserCard';
import PetGrid      from '../../../components/PetGrid';
import PetTag       from '../../../components/PetTag';
import UserInterest from '../../../components/UserInterest';

import {
  AboutArea,
  AboutText,
  Back,
  Background,
  Body,
  ButtonView,
  Container,
  Dots,
  FeaturesArea,
  Footer,
  PetImageArea,
  PetInfo,
  PetInfoArea,
  PetName,
  PetTextArea,
  SwipeImage,
  TagArea,
  Tags,
  Title,
  UserArea,
  UserInterestArea,
} from './styles';

export default function PetProfile() {
  const [favorite, setFavorite] = useState(false);
  const [interests, setInterests] = useState([UserImageExample2, UserImageExample2]);
  const [user     , setUser] = useState({fullname: '', img_profile: '', about: ''});
  const [userData , setUserData] = useState({});
  const [token    ,    setToken] = useState('');

  const navigation = useNavigation();
  const route      = useRoute();
  const data       = route.params.petSelected;
  const id_doador  = data.id_doador;
  const mypet      = route.params.mypet;

  const petInfos = [{title: 'TIPO DE ANIMAL', text: data.tipo.toUpperCase()},
                    {title: 'IDADE',          text: `${data.idade} ANOS`},
                    {title: 'SEXO',           text: data.sexo.toUpperCase()},
                    {title: 'TAMANHO/PESO',   text: data.tamanho.toUpperCase()},
                    {title: 'VACINAS',        text: data.vacinação.toUpperCase()},
                    {title: 'TREINADO',       text: data.Treinado ? 'SIM' : 'NÃO'},
                    {title: 'CASTRADO',       text: data.castrado ? 'SIM' : 'NÃO'},
                    {title: 'VERMIFUGADO',    text: data.vermifugado ? 'SIM' : 'NÃO'},
                    {title: 'CHIPADO',        text: data.chipado ? 'SIM' : 'NÃO'}]

  function goToUserProfile() {
    navigation.navigate('UserProfile', { userData })
  }

  function goToRegisterPet() {
    navigation.navigate('RegisterPet', { data })
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async function loadUser() {

    const userToken = await AsyncStorage.getItem('token');
    setToken(userToken);

    const response = await api.get('/api/user/profile', {
      headers: {
        'userId': `${id_doador}`,
        'authorization': `Bearer ${userToken}`
      }
    })

    setUser(response.data.user);
    setUserData(response.data);
  }

  async function handleRequest() {
    setFavorite(!favorite);

    const userId = await AsyncStorage.getItem('id');
    const Ids = {
      id_pet: data.id,
      id_doador
    }

    try {
      await api.post('/api/pets/requestpet', Ids, {
        headers: {
          'userId': `${userId}`,
          'authorization': `Bearer ${token}`
        }
      })
    }
    catch (err) {
      alert(err.response.data)
      console.log(err.response.status)
      console.log(err.response.data)
    }

  }

  useEffect(() => {loadUser()}, [])

  return (
    <Background source={ProfileBG}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>

          <PetImageArea>
            <Back>
              <Feather
                name='chevron-left'
                size={40}
                color='#FFFF'
                onPress={() => {navigation.goBack()}}
              />
            </Back>

            <Swiper
              style={{height: 350}}
              dot={<Dots active={'#000'} />}
              activeDot={<Dots active={'#FFF'} />}
              paginationStyle={{top: null, right: 15, left: null, bottom: 15}}
              autoplay={true}
            >
              {
                <SwipeImage source={{uri: `https://drive.google.com/thumbnail?id=${data.imagem.split('"')[1]}`}} resizeMode="cover"/>
              }
            </Swiper>

            <PetInfoArea>
              <PetTextArea>
                <PetName>{capitalize(data.nome)}</PetName>
                <PetInfo>{`${data.idade} anos`}</PetInfo>
              </PetTextArea>
              {
                mypet == 0 ?
                <FontAwesome
                  name={favorite ? 'heart' : 'heart-o'}
                  size={50}
                  color={favorite ? "#F17808" : "#fff"}
                  style={{marginBottom:20}}
                  onPress={handleRequest}
                /> :
                <></>
              }
            </PetInfoArea>

          </PetImageArea>
          <Body>
            <AboutArea>
              <Title>SOBRE</Title>
              <AboutText>{`${capitalize(data.caracteristicas)}.`}</AboutText>
            </AboutArea>

            <TagArea>
              <Title>CARACTERISTICAS DO PET</Title>
              <Tags horizontal={true} showsHorizontalScrollIndicator={false}>
                <PetTag tag={'docil'}/>
                <PetTag tag={'amigavel'}/>
                <PetTag tag={'brincalhao'}/>
              </Tags>
            </TagArea>

            <FeaturesArea>
              <Title>CARACTERISTICAS ADICIONAIS</Title>
              <PetGrid data={petInfos}/>
            </FeaturesArea>

            {
              mypet ?
                <UserInterestArea>
                  <UserInterest data={interests}/>
                </UserInterestArea>
              :
              <UserArea>
                <Title>SOBRE O DONO</Title>
                <UserCard
                  onPress={goToUserProfile}
                  image={{uri: `https://drive.google.com/thumbnail?id=${user.img_profile}`}}
                  name={user.fullname}
                  text={`${capitalize(user.about)}.`}
                />
              </UserArea>
            }

          </Body>
          <Footer>
           {favorite ?
              <ButtonView>
                <Buttom
                  text='Ir para o Chat'
                  colors={['#12947F','#0AB599']}
                  radius={10}
                />
              </ButtonView>
              :
              <View />
            }

            <Buttom
              text={mypet ? 'Editar Pet' : 'Ver outros Animais'}
              colors={['#F17808','#FF9A00']}
              radius={10}
              onPress={() => {mypet ? goToRegisterPet() : navigation.goBack()}}
            />
          </Footer>
        </Container>
      </ScrollView>
    </Background>
  );
}