import React from 'react';

import {
  Tag,
  TagText,
} from './styles';

export default function PetTag({tag}) {
  const data = {
    docil:      {text:'Dócil',      color:'#FF6F59', background: '#FFE9E6'},
    amigavel:   {text:'Amigável',   color:'#33C0FF', background: '#E5F7FF'},
    brincalhao: {text:'Brincalhão', color:'#FF9933', background: '#FFF2E5'}
  }

  return(
    <Tag background={data[tag].background}>
      <TagText color={data[tag].color}>{data[tag].text}</TagText>
    </Tag>
  );
}