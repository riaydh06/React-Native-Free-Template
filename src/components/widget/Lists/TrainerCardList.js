import React from 'react';
import TrainerCard from '../Cards/TrainerCard';

const TrainerCardList = ({items, onPress}) =>
  items.map((item) => (
    <TrainerCard
      key={item.id}
      title={item.title}
      subtitle={item.subtitle}
      point={item.point}
      rating={item.rating}
      onPress={() => {}}
    />
  ));

export default TrainerCardList;
