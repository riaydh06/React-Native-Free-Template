import React from 'react';
import GymCard from '../Cards/GymCard';

const GymCardList = ({items, onPress}) =>
  items.map((item) => (
    <GymCard
      key={item.id}
      title={item.title}
      subtitle={item.subtitle}
      point={item.point}
      rating={item.rating}
      onPress={onPress}
    />
  ));

export default GymCardList;
