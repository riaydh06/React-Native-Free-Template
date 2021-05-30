import React from 'react';
import {ScrollView} from 'react-native';
import {PagePrimary, TrainerCardList} from '../../components/widget';
import {items} from '../../constants';
import {w100} from '../../styles/commonStyle';

const FeaturedTrainer = ({navigation}) => {
  return (
    <PagePrimary container={false}>
      <ScrollView style={w100}>
        <TrainerCardList
          items={items}
          onPress={() => navigation.navigate('FeaturedTrainer')}
        />
      </ScrollView>
    </PagePrimary>
  );
};

export default FeaturedTrainer;
