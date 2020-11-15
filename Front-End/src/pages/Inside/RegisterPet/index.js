import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import { Feather } from '@expo/vector-icons';

import { ScrollView } from 'react-native';

import BG from '../../../assets/images/RegisterPet/RegisterPetBG.png';

import Button         from '../../../components/Button';
import CustomCheckBox from '../../../components/CustomCheckBox';
import CustomInput    from '../../../components/CustomInput';
import CustomPicker   from '../../../components/CustomPicker';
import PetImageArea   from '../../../components/PetImageArea';
import PetTag         from '../../../components/PetTag';
import PetType        from '../../../components/PetType';

import {
  Background,
  Body,
  Container,
  CheckBoxArea,
  CheckBoxLine,
  Footer,
  FooterText,
  ImageArea,
  Line,
  PickerView,
  SubImageArea,
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

  const [dog   ,  setDog] = useState(0);
  const [cat   ,  setCat] = useState(0);
  const [plus  , setPlus] = useState(0);

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
            <PetImageArea
              source={petImage0}
              onPress={() => UploadPhoto(0)}
              main={true}
            />
            <SubImageArea>
              <PetImageArea
                source={petImage1}
                onPress={() => UploadPhoto(1)}
              />
              <PetImageArea
                source={petImage2}
                onPress={() => UploadPhoto(2)}
              />
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
                <PetType name='dog' onPress={() => {setDog(!dog)}}/>
                <PetType name='cat' onPress={() => {setCat(!cat)}}/>
                <PetType name='plus' onPress={() => {setPlus(!plus)}}/>
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
                  numeric={true}
                />
              </Line>

              <Line>
                <CustomInput
                  placeholder='Peso'
                  onChangeText={weight => setWeight(weight)}
                  defaultValue={weight}
                  length={30}
                  color={secundary}
                  numeric={true}
                />
                <CustomInput
                  placeholder='Tamanho'
                  onChangeText={size => setSize(size)}
                  defaultValue={size}
                  length={30}
                  color={secundary}
                  left={true}
                  numeric={true}
                />
              </Line>
            </TextArea>

            <CheckBoxArea>
              <CheckBoxLine>
                <CustomCheckBox
                  value={treinado}
                  onValueChange={setTreinado}
                  text={'TREINADO'}
                />
                <CustomCheckBox
                  value={castrado}
                  onValueChange={setCastrado}
                  text={'CASTRADO'}
                />
              </CheckBoxLine>

              <CheckBoxLine>
                <CustomCheckBox
                  value={vermifugado}
                  onValueChange={setVermifugado}
                  text={'VERMIFUGADO'}
                />
                <CustomCheckBox
                  value={chipado}
                  onValueChange={setChipado}
                  text={'CHIPADO'}
                />
              </CheckBoxLine>

            </CheckBoxArea>

            <Footer>
              <FooterText>
                <CustomInput
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