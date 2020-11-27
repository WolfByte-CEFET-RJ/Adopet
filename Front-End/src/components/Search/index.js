import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';

import {
  SearchArea,
  SearchName,
} from './styles';

export default function Search(props) {

  useEffect(() => {
    if (!props.item) {
      props.function(props.itens);
      return;
    };

    const findName = props.itens.filter((item) => item.name.indexOf(props.item) != -1);
    props.function(findName)

  }, [props.item])

  return(
    <SearchArea>
      <SearchName
        placeholder={"Pesquise seu pet"}
        onChangeText={props.onChangeText}
        maxLength={20}
      />
      <Feather name="search" size={25} color={'#12947F'}/>
    </SearchArea>
  );
}
