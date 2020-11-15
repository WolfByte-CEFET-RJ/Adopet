import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';

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

  const [petImage  , setPetImage] = useState(['','','']);

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

    var images = petImage.slice();

    if (imgPet.cancelled || !imgPet.uri) {
      images[index] = '';
      setPetImage(images)
      return;
    }

    images[index] = imgPet
    setPetImage(images)
  }

  function CreateImg(pet) {
    let localUri = pet.uri;
    let filename = localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let imageType = match ? `image/${match[1]}` : `image`;

    return {
      uri: pet.uri,
      name: filename,
      type: imageType
    }
  }

  async function handleRegister() {

    const userToken = await AsyncStorage.getItem('token');

    // const img = {
    //   CreateImg(petImage0),
    //   CreateImg(petImage1),
    //   CreateImg(petImage2)
    // }

    let localUri = petImage[0].uri;
    let filename = localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let imageType = match ? `image/${match[1]}` : `image`;

    const img = {
      uri: petImage[0].uri,
      name: filename,
      type: imageType
    }

    // const img = CreateImg(petImage0);

    const data = new FormData();
    data.append('localização'     ,     'local');
    data.append('nome'            ,     petName);
    data.append('img'             ,         img);
    data.append('tipo'            ,  'cachorro');
    data.append('sexo'            ,         sex);
    data.append('idade'           ,         age);
    data.append('tamanho'         ,        size);
    data.append('peso'            ,      weight);
    data.append('vacinação'       ,      vacina);
    data.append('Treinado'        ,    treinado);
    data.append('castrado'        ,    castrado);
    data.append('vermifugado'     , vermifugado);
    data.append('chipado'         ,     chipado);
    data.append('caracteristicas' ,       about);
    data.append('id_doador'       ,         '3');

    try {
      await api.post('api/pet', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'authorization': `Bearer ${userToken}`
        }
      });
      console.log('Pet cadastrado feito com sucesso.');
      goToPets();
    }

    catch (err) {
      alert(err.response.data)
      console.log(err.response.status)
      console.log(err.response.data)
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Background source={BG}>
        <Container>

          <ImageArea>
            <PetImageArea
              source={petImage[0]}
              onPress={() => UploadPhoto(0)}
              main={true}
            />
            <SubImageArea>
              <PetImageArea
                source={petImage[1]}
                onPress={() => UploadPhoto(1)}
              />
              <PetImageArea
                source={petImage[2]}
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
                  placeholder='Idade (anos)'
                  onChangeText={age => setAge(age)}
                  defaultValue={age}
                  length={30}
                  color={secundary}
                  numeric={1}
                />
              </Line>

              <Line>
                <CustomInput
                  placeholder='Peso (kg)'
                  onChangeText={weight => setWeight(weight)}
                  defaultValue={weight}
                  length={30}
                  color={secundary}
                  numeric={1}
                />
                <CustomInput
                  placeholder='Tamanho (cm)'
                  onChangeText={size => setSize(size)}
                  defaultValue={size}
                  length={30}
                  color={secundary}
                  left={true}
                  numeric={1}
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
                  <PetTag tag={'calmo'}/>
                  <PetTag tag={'timido'}/>
                  <PetTag tag={'apegado'}/>
                </Tags>
              </TagArea>

              <Button
                text='Salvar'
                colors={['#F17808','#FF9A00']}
                radius={10}
                onPress={handleRegister}
              />
            </Footer>

          </Body>
        </Container>
      </Background>
    </ScrollView>
  )
}