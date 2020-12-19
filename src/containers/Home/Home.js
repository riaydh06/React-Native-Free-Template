import React from 'react';
import {View} from 'react-native';
import {TextComponent} from '../../components/ui';
import {
  PagePrimary,
  VerticalCard,
  HorizontalCard,
} from '../../components/widget';
import {mb10} from '../../styles/commonStyle';

const Home = () => {
  return (
    <PagePrimary container={false}>
      <TextComponent content="hello" />
      <View style={mb10}>
        <VerticalCard
          title="Bally Total Fitness"
          subtitle="Established in 1999 this is the best gym in this area with 1200 registered clients"
          point="3.8 ml"
          rating="3.9"
          onPress={() => {}}
        />
      </View>
      <View style={{paddingHorizontal: 10}}>
        <HorizontalCard
          title="Bally Total Fitness"
          subtitle="Established in 1999 this is the best gym in this area with 1200 registered clients"
          point="3.8 ml"
          rating="3.9"
          onPress={() => {}}
        />
      </View>
    </PagePrimary>
  );
};

export default Home;
