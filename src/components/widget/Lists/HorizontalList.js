import React from 'react';
import {ScrollView} from 'react-native';
import HorizontalCard from '../Cards/HorizontalCard';

const HorizontalList = ({items, onPress}) => (
  <ScrollView horizontal>
    {items.map((item) => (
      <HorizontalCard
        key={item.id}
        title={item.title}
        subtitle={item.subtitle}
        point={item.point}
        rating={item.rating}
        onPress={() => {}}
      />
    ))}
  </ScrollView>
);

export default HorizontalList;
