import React from 'react';
import {ScrollView, View} from 'react-native';
import {TextComponent} from '../../components/ui';
import {
  PagePrimary,
  HorizontalList,
  VerticalList,
} from '../../components/widget';
import {mb10, w100} from '../../styles/commonStyle';

const items = [
  {
    id: 1,
    title: 'Bally Total Fitness',
    subtitle:
      'Established in 1999 this is the best gym in this area with 1200 registered clients',
    point: '3.8 ml',
    rating: '3.9',
  },
  {
    id: 2,
    title: 'Bally Total Fitness',
    subtitle:
      'Established in 1999 this is the best gym in this area with 1200 registered clients',
    point: '3.8 ml',
    rating: '3.9',
  },
  {
    id: 3,
    title: 'Bally Total Fitness',
    subtitle:
      'Established in 1999 this is the best gym in this area with 1200 registered clients',
    point: '3.8 ml',
    rating: '3.9',
  },
  {
    id: 4,
    title: 'Bally Total Fitness',
    subtitle:
      'Established in 1999 this is the best gym in this area with 1200 registered clients',
    point: '3.8 ml',
    rating: '3.9',
  },
  {
    id: 5,
    title: 'Bally Total Fitness',
    subtitle:
      'Established in 1999 this is the best gym in this area with 1200 registered clients',
    point: '3.8 ml',
    rating: '3.9',
  },
];

const Home = () => {
  return (
    <PagePrimary container={false}>
      <ScrollView style={w100}>
        <TextComponent content="hello" />
        <View style={{paddingHorizontal: 10}}>
          <HorizontalList items={items} />
        </View>
        <View style={{paddingHorizontal: 10}}>
          <HorizontalList items={items} />
        </View>
        <View style={mb10}>
          <VerticalList items={items} />
        </View>
      </ScrollView>
    </PagePrimary>
  );
};

export default Home;
