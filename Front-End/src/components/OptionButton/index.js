import React from 'react';

import {
  Option,
  OptionBackground,
  OptionImage,
  OptionName,
} from './styles';

export default function OptionButton({background, image, name}) {
  return(
    <Option>
      <OptionBackground background={background}>
        <OptionImage source={image}/>
      </OptionBackground>
      <OptionName>{name}</OptionName>
    </Option>
  );
}