import React, { useState, useEffect } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';

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

const tagNames = ['docil', 'amigavel', 'brincalhao', 'calmo', 'timido', 'apegado'];

import {
  Back,
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
  Yellow,
} from './styles';

export default function RegisterPet() {

  const [petImage  , setPetImage] = useState(['','','']);
  const [tagCheck  , setTagCheck] = useState(Array(6).fill(0));
  const [tagLimit  , setTagLimit] = useState(0);

  const [type  , setType] = useState('');
  const [checkType, setCheckType] = useState(Array(3).fill(0));

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
  const route      = useRoute()
  const pet    = route.params.data;

  useEffect(() => {
    if (pet) {
      // setPetImage(pet.imagem);
      setType(pet.tipo);
      if (pet.tipo == 'cachorro') {
        setCheckType([1,0,0]);
      } else if (pet.tipo == 'gato') {
        setCheckType([0,1,0]);
      } else {
        setCheckType([0,0,1]);
      }
      setPetName(pet.nome);
      setAbout(pet.caracteristicas);
      // setWeight(pet);
      setSize(pet.tamanho);
      setAge(pet.idade.toString());
      setSex(pet.sexo);
      setVacina(pet.vacinação);
      setTreinado(pet.Treinado ? true : false);
      setCastrado(pet.castrado ? true : false);
      setVermifugado(pet.vermifugado ? true : false);
      setChipado(pet.chipado ? true : false);
    }
  }, [])

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

  function CheckTags(index) {
    let tags = [...tagCheck];

    if ((tags[index] == 0) && (tagLimit >= 3)) return;

    tags[index] ? setTagLimit(tagLimit - 1) : setTagLimit(tagLimit + 1)

    tags[index] = !tags[index];
    setTagCheck([...tags]);
  }

  function CheckType(name, index) {
    let types = Array(3).fill(0);
    setType(name);
    types[index] = !CheckType[index];

    setCheckType([...types]);
  }

  async function handleRegister() {

    const userToken = await AsyncStorage.getItem('token');
    const userId    = await AsyncStorage.getItem('id');

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

    const localização = `latitude: 51.03, longitude: 3.05`;

    // const img = CreateImg(petImage0);

    const data = new FormData();
    data.append('localização'     ,     localização);
    data.append('nome'            ,     petName);
    data.append('img'             ,         img);
    data.append('tipo'            ,        type);
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
console.log(data);
    try {
      await api.post('api/pets/create', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'authorization': `Bearer ${userToken}`,
          'userId': `${userId}`
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
        <Back>
          <FontAwesome5
            name='arrow-left'
            size={30}
            color='#FFFFFF'
            onPress={() => {navigation.goBack()}}
          />
        </Back>
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
                <PetType name='dog'  value={checkType[0]} onPress={() => {CheckType('cachorro', 0)}}/>
                <PetType name='cat'  value={checkType[1]} onPress={() => {CheckType('gato', 1)}}/>
                <PetType name='plus' value={checkType[2]} onPress={() => {CheckType('outro', 2)}}/>
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
                    values={['Macho', 'Fêmea']}
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
                <Title>CARACTERISTICAS DO PET <Yellow value={tagLimit}>{tagLimit}/3</Yellow></Title>
                <Tags horizontal={true} showsHorizontalScrollIndicator={false}>
                  {
                    tagNames.map((tagName, index) => (
                      <PetTag
                        key={index}
                        tag={tagName}
                        onPress={() => {CheckTags(index)}}
                        check={tagCheck[index]}/>
                    ))
                  }
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