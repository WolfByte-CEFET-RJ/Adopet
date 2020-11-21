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
      <OptionBackground background={background} onPress={onPress} activeOpacity={0.9}>
        <OptionImage source={image}/>
      </OptionBackground>
      <OptionName>{name}</OptionName>
    </Option>
  );
}