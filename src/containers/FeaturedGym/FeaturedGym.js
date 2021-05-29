import React from 'react';
import {ScrollView} from 'react-native';
import {PagePrimary, GymCardList} from '../../components/widget';
import {items} from '../../constants';
import {w100} from '../../styles/commonStyle';

const FeaturedGym = () => {
  return (
    <PagePrimary container={false}>
      <ScrollView style={w100}>
        <GymCardList items={items} />
      </ScrollView>
    </PagePrimary>
  );
};

export default FeaturedGym;
