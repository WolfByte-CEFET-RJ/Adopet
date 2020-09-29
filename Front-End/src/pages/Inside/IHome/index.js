import React from 'react';

// import { Dimensions, StyleSheet } from 'react-native';

// import Animated from 'react-native-reanimated';

// import Interactable from 'react-native-interactable';
// // import {mix} from  "react-native-redash/lib/module/v1";

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import IHomeBG from '../../../assets/images/IHome/IHomeBG.png';
import PetImageExample from '../../../assets/images/PetProfile/pet_example.png';

import {
  Background,
  Body,
  Container,
  Header,
  Info,
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

  const navigation= useNavigation();

  return(
    <Background source={IHomeBG}>
      <Container>
        <Header>
          <Feather
            name="chevron-left"
            size={30}
            color='#FFF'
            onPress={() => {navigation.goBack()}}
          />
          <Feather
            name="search"
            size={30}
            color='#FFF'
          />
        </Header>
        <Body>
          <Pet onPress={() => {navigation.navigate('PetProfile')}} activeOpacity={1}>
            {/* <Interactable.View
              // animatedValueX={x}
              // animatedValueY={y}
              // snapPoints={[{ x: -1 * A }, { x: 0 }, { x: A }]}
              // style={StyleSheet.absoluteFill}
            > */}
              {/* <Animated.View {...{ style }}> */}
                <PetImage source={PetImageExample} resizeMode="cover" />
                <Info >
                  <PetName>Polenta</PetName>
                  <PetInfo>2 anos, Rio de Janeiro, Brasil</PetInfo>
                  <TextClick>Clique na foto para mais informações!</TextClick>
                </Info>
              {/* </Animated.View> */}
            {/* </Interactable.View> */}
          </Pet>
        </Body>

      </Container>
    </Background>
  )
}