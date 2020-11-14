import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import { Feather } from '@expo/vector-icons';

import { ScrollView, CheckBox } from 'react-native';

import BG from '../../../assets/images/RegisterPet/RegisterPetBG.png';

import Button       from '../../../components/Button';
import CustomInput  from '../../../components/CustomInput';
import CustomPicker from '../../../components/CustomPicker';
import Info         from '../../../components/Info';
import PetTag       from '../../../components/PetTag';
import PetType      from '../../../components/PetType';

import {
  Background,
  Body,
  Container,
  CheckBoxArea,
  CheckBoxLine,
  CheckBoxItem,
  CheckBoxText,
  Footer,
  FooterText,
  ImageArea,
  ImagePet,
  Line,
  MainImage,
  MainImageText,
  PickerView,
  SubImage,
  SubImageArea,
  SubImagePet,
  SubImageText,
  TagArea,
  Tags,
  TextArea,
  Title,
  TypeArea,
  Types,
} from './styles';

export default function RegisterPet() {

  const [petImage0  , setPetImage0] = useState();
  const [petImage1  , setPetImage1] = useState();
  const [petImage2  , setPetImage2] = useState();

  const [petName   ,    setPetName] = useState('');
  const [about     ,      setAbout] = useState('');

  const [weight    ,     setWeight] = useState('');
  const [size      ,       setSize] = useState('');
  const [age       ,        setAge] = useState('');
  const [sex       ,        setSex] = useState('0');

  const [vacina    ,     setVacina] = useState('');

  const [treinado    ,    setTreinado] = useState(false);
  const [castrado    ,    setCastrado] = useState(false);
  const [vermifugado , setVermifugado] = useState(false);
  const [chipado     ,     setChipado] = useState(false);

  const [secundary ,  setSecundary] = useState('#12947F');

  const navigation = useNavigation();

  function goToPets() {
    navigation.reset({
      routes:[{name:'Profile'}]
    })
  }

  async function UploadPhoto(index) {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

      if (status != 'granted') {
        alert('Para continuar precisamos da sua permissão.');
        return;
      }
    }

    const imgPet = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (imgPet.cancelled || !imgPet.uri) {
      setPetImage0();
      setPetImage1();
      setPetImage2();
      return;
    }

    switch (index) {
      case 0:
        setPetImage0(imgPet);
        break;
      case 1:
        setPetImage1(imgPet);
        break;
      case 2:
        setPetImage2(imgPet);
        break;
    }
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Background source={BG}>
        <Container>

          <ImageArea>
            <MainImage onPress={() => UploadPhoto(0)}>
              {petImage0 ?
                <ImagePet source={petImage0} /> :
                <MainImageText>Adicionar Foto</MainImageText>
              }
            </MainImage>
            <SubImageArea>
              <SubImage onPress={() => UploadPhoto(1)}>
                {petImage1 ?
                  <SubImagePet source={petImage1} /> :
                  <SubImageText>Adicionar Foto</SubImageText>
                }
              </SubImage>
              <SubImage onPress={() => UploadPhoto(2)}>
                {petImage2 ?
                  <SubImagePet source={petImage2} /> :
                  <SubImageText>Adicionar Foto</SubImageText>
                }
              </SubImage>
            </SubImageArea>
          </ImageArea>

          <Body>
            <TextArea>
              <CustomInput
                image='user'
                placeholder='Nome'
                onChangeText={petName => setPetName(petName)}
                defaultValue={petName}
                length={30}
                color={secundary}
              />

              <CustomInput
                placeholder='Sobre'
                onChangeText={about => setAbout(about)}
                defaultValue={about}
                length={100}
                color={secundary}
                multiline={true}
              />
            </TextArea>

            <TypeArea>
              <Title>TIPO</Title>
              <Types>
                <PetType name='dog'/>
                <PetType name='cat'/>
                <PetType name='plus'/>
              </Types>
            </TypeArea>

            <TextArea>
              <Line>
                <PickerView>
                  <CustomPicker
                    flex={1}
                    name={'Sexo'}
                    selectedValue={sex}
                    onValueChange={sex => {setSex(sex)}}
                    values={['macho', 'fêmea']}
                  />
                </PickerView>

                <CustomInput
                  placeholder='Idade'
                  onChangeText={age => setAge(age)}
                  defaultValue={age}
                  length={30}
                  color={secundary}
                />
              </Line>

              <Line>
                <CustomInput
                  placeholder='Peso'
                  onChangeText={weight => setWeight(weight)}
                  defaultValue={weight}
                  length={30}
                  color={secundary}
                />
                <CustomInput
                  placeholder='Tamanho'
                  onChangeText={size => setSize(size)}
                  defaultValue={size}
                  length={30}
                  color={secundary}
                  left={true}
                />
              </Line>
            </TextArea>

            <CheckBoxArea>
              <CheckBoxLine>
                <CheckBoxItem>
                  <CheckBox
                    value={treinado}
                    onValueChange={setTreinado}
                  />
                  <CheckBoxText>TREINADO</CheckBoxText>
                </CheckBoxItem>

                <CheckBoxItem>
                  <CheckBox
                    value={castrado}
                    onValueChange={setCastrado}
                  />
                  <CheckBoxText>CASTRADO</CheckBoxText>
                </CheckBoxItem>
              </CheckBoxLine>

              <CheckBoxLine>
                <CheckBoxItem>
                  <CheckBox
                    value={vermifugado}
                    onValueChange={setVermifugado}
                  />
                  <CheckBoxText>VERMIFUGADO</CheckBoxText>
                </CheckBoxItem>

                <CheckBoxItem>
                  <CheckBox
                    value={chipado}
                    onValueChange={setChipado}
                  />
                  <CheckBoxText>CHIPADO</CheckBoxText>
                </CheckBoxItem>
              </CheckBoxLine>

            </CheckBoxArea>

            <Footer>
              <FooterText>
                <Info
                  placeholder='Vacinação'
                  onChangeText={vacina => setVacina(vacina)}
                  defaultValue={vacina}
                  length={100}
                  color={secundary}
                  multiline={true}
                />
              </FooterText>

              <TagArea>
                <Title>CARACTERISTICAS DO PET</Title>
                <Tags horizontal={true} showsHorizontalScrollIndicator={false}>
                  <PetTag tag={'docil'}/>
                  <PetTag tag={'amigavel'}/>
                  <PetTag tag={'brincalhao'}/>
                </Tags>
              </TagArea>

              <Button
                text='Salvar'
                colors={['#F17808','#FF9A00']}
                radius={10}
                onPress={() => {}}
              />
            </Footer>

          </Body>
        </Container>
      </Background>
    </ScrollView>
  )
}