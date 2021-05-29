import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  PagePrimary,
  FeaturedCardList,
  GymCardList,
  ListHeader,
  TrainerCardList,
  StarRating,
} from '../../components/widget';
import {items} from '../../constants';
import {ph15, w100} from '../../styles/commonStyle';

const Home = ({navigation}) => {
  return (
    <PagePrimary container={false}>
      <ScrollView style={w100}>
        <View style={ph15}>
          <ListHeader
            title="Featured GYM"
            onPress={() => navigation.navigate('FeaturedGym')}
          />
          <FeaturedCardList items={items} />

          <ListHeader
            title="Featured Trainer"
            onPress={() => navigation.navigate('FeaturedTrainer')}
          />
          <FeaturedCardList items={items} />
        </View>
        <View style={ph15}>
          <ListHeader
            title="All Gym"
            onPress={() => navigation.navigate('FeaturedGym')}
          />
        </View>
        <GymCardList items={items} />
        <StarRating
          rating={3.5}
          max={5}
          iconWidth={24}
          iconHeight={24}
          onRate={() => {}}
        />
        {/* <View style={ph15}>
          <ListHeader
            title="All Trainer"
            onPress={() => navigation.navigate('FeaturedTrainer')}
          />
        </View>
        <TrainerCardList items={items} /> */}
      </ScrollView>
    </PagePrimary>
  );
};

export default Home;
