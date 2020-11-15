import React from 'react';

import {
  Tag,
  TagText,
} from './styles';

export default function PetTag({tag}) {
  const data = {
    docil:      {text:'Dócil',      color:'#FF6F59', background: '#FFE9E6'},
    amigavel:   {text:'Amigável',   color:'#33C0FF', background: '#E5F7FF'},
    brincalhao: {text:'Brincalhão', color:'#FF9933', background: '#FFF2E5'},
    calmo:      {text:'Calmo',      color:'#2ACE1B', background: '#E6FFE5'},
    timido:     {text:'Tímido',     color:'#CE1BA7', background: '#FAEDFC'},
    apegado:    {text:'Apegado',    color:'#B52222', background: '#F4B4BC'}
  }

  return(
    <Tag background={data[tag].background}>
      <TagText color={data[tag].color}>{data[tag].text}</TagText>
    </Tag>
  );
}