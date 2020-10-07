import React from 'react';

import { FlatList } from 'react-native';

import {
  FeaturesGrid,
  Item,
  ItemText,
  ItemTitle,
} from './styles';

export default function PetGrid({data}) {
  return(
    <FeaturesGrid>
      <FlatList
        data={data}
        keyExtractor={Info => String(Info.title)}
        numColumns={3}
        renderItem={ ({item}) => (
          <Item>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemText>{item.text}</ItemText>
          </Item>
        )}
      />
    </FeaturesGrid>
  );
}