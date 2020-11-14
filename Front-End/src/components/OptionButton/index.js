import React from 'react';

import {
  Option,
  OptionBackground,
  OptionImage,
  OptionName,
} from './styles';

export default function OptionButton({background, image, name, onPress}) {
  return(
    <Option>
      <OptionBackground background={background} onPress={onPress}>
        <OptionImage source={image}/>
      </OptionBackground>
      <OptionName>{name}</OptionName>
    </Option>
  );
}