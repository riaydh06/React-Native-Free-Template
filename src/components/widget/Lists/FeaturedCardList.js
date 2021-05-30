import React from 'react';
import {ScrollView} from 'react-native';
import FeaturedCard from '../Cards/FeaturedCard';

const FeaturedCardList = ({items, onPress}) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {items.map((item) => (
      <FeaturedCard
        key={item.id}
        title={item.title}
        subtitle={item.subtitle}
        point={item.point}
        rating={item.rating}
        onPress={onPress}
      />
    ))}
  </ScrollView>
);

export default FeaturedCardList;
