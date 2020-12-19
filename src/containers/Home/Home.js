import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  PagePrimary,
  HorizontalList,
  VerticalList,
  ListHeader,
} from '../../components/widget';
import {ph15, w100} from '../../styles/commonStyle';

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
        <View style={ph15}>
          <ListHeader title="Featured GYM" onPress={() => {}} />
          <HorizontalList items={items} />

          <ListHeader title="Featured Trainer" onPress={() => {}} />
          <HorizontalList items={items} />
          <ListHeader title="All Trainer" onPress={() => {}} />
        </View>

        <VerticalList items={items} />
      </ScrollView>
    </PagePrimary>
  );
};

export default Home;
