import React, { useEffect, useState } from 'react';

import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

// import { Dimensions, StyleSheet } from 'react-native';

// import Animated from 'react-native-reanimated';

// import Interactable from 'react-native-interactable';
// // import {mix} from  "react-native-redash/lib/module/v1";

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import IHomeBG from '../../../assets/images/IHome/IHomeBG.png';
import PetImageExample from '../../../assets/images/PetProfile/pet_example.png';

import {
  Adopt,
  Background,
  Body,
  ButtonArea,
  Container,
  Header,
  Info,
  Next,
  Pet,
  PetImage,
  PetInfo,
  PetName,
  TextClick,
} from './styles';

export default function IHome() {
  // const { width, height } = Dimensions.get('window');
  // const {
  //   interpolate,
  //   concat,
  //   Extrapolate,
  // } = Animated;

  // const φ = (1 + Math.sqrt(5)) / 2;
  // const deltaX = width / 2;
  // const w = width - 32;
  // const h = w * φ;
  // const α = Math.PI / 12;
  // const A = width * Math.cos(α) + height * Math.sin(α);

  // const x = 0;
  // const y = 0;
  // const rotateZ = concat(
  //   interpolate(x, {
  //     inputRange: [-1 * deltaX, deltaX],
  //     outputRange: [α, -1 * α],
  //     extrapolate: Extrapolate.CLAMP,
  //   }),
  //   "rad",
  // );

  // const translateX = x;
  // const translateY = y;
  // const style = {
  //   ...StyleSheet.absoluteFillObject,
  //   transform: [
  //     { translateX },
  //     { translateY },
  //     { rotateZ },
  //   ],
  // };

  const [pets       ,        setPets] = useState([]);
  const [petSelected, setPetSelected] = useState({nome: '', idade: '', localização: ''});
  const [loading    ,     setLoading] = useState(false);
  const [token      ,       setToken] = useState('');
  const [count      ,       setCount] = useState(0);
  const [petPage    ,     setPetPage] = useState(1);

  const navigation = useNavigation();

  function goPetProfile() {
    navigation.navigate('PetProfile', { petSelected });
  }

  async function loadPets() {
    if (loading) return;
    setLoading(true);

    const response = await api.get('api/pets', {
      params: {page: petPage},
      headers: {
        'authorization': `Bearer ${token}`
      }
    })

    setPetPage(petPage + 1);

    setPets(response.data);
    setPetSelected(response.data[0]);

    setCount(0);
    setLoading(false);
  }

  useEffect(() => {
    async function handleToken() {
      const userToken = await AsyncStorage.getItem('token');
      setToken(userToken);
    }

    handleToken()
  }, [])

  useEffect(() => {
    loadPets();
  }, [])

  function NextPet() {
    if (!pets.length == count + 1) {
      setCount(count + 1);
      setPetSelected(pets[count]);

    } else {
      loadPets()
    }
  }

  return(
    <Background source={IHomeBG}>
      <Container>
        <Body>
          <Pet onPress={goPetProfile} activeOpacity={1}>
            {/* <Interactable.View
              // animatedValueX={x}
              // animatedValueY={y}
              // snapPoints={[{ x: -1 * A }, { x: 0 }, { x: A }]}
              // style={StyleSheet.absoluteFill}
            > */}
              {/* <Animated.View {...{ style }}> */}
                <PetImage source={{uri:petSelected.imagem.split('"')[1]}} resizeMode="cover" />
                {/* <PetImage source={PetImageExample} resizeMode="cover" /> */}
                <Info >
                  <PetName>{petSelected.nome}</PetName>
                  <PetInfo>{`${petSelected.idade} anos, ${petSelected.localização}`}</PetInfo>
                  <TextClick>Clique na foto para mais informações!</TextClick>
                </Info>
              {/* </Animated.View> */}
            {/* </Interactable.View> */}
          </Pet>
          <ButtonArea>
            <Next onPress={NextPet}>
              <Feather name={'x'} size={35} color={'#FF0000'}/>
            </Next>
            <Adopt>
              <Feather name={'heart'} size={35} color={'#00FF00'}/>
            </Adopt>
          </ButtonArea>
        </Body>

      </Container>
    </Background>
  )
}