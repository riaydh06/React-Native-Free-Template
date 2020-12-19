import React from 'react';
import VerticalCard from '../Cards/VerticalCard';

const VerticalList = ({items, onPress}) =>
  items.map((item) => (
    <VerticalCard
      key={item.id}
      title={item.title}
      subtitle={item.subtitle}
      point={item.point}
      rating={item.rating}
      onPress={() => {}}
    />
  ));

export default VerticalList;
