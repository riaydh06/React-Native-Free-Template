import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  PagePrimary,
  FeaturedCardList,
  GymCardList,
  ListHeader,
  TrainerCardList,
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
          <FeaturedCardList
            items={items}
            onPress={() => navigation.navigate('GymDetails')}
          />

          <ListHeader
            title="Featured Trainer"
            onPress={() => navigation.navigate('FeaturedTrainer')}
          />
          <FeaturedCardList
            items={items}
            onPress={() => navigation.navigate('TrainerDetails')}
          />
        </View>
        <View style={ph15}>
          <ListHeader
            title="All Gym"
            onPress={() => navigation.navigate('FeaturedGym')}
          />
        </View>
        <GymCardList
          items={items}
          onPress={() => navigation.navigate('GymDetails')}
        />

        <View style={ph15}>
          <ListHeader
            title="All Trainer"
            onPress={() => navigation.navigate('FeaturedTrainer')}
          />
        </View>
        <TrainerCardList
          items={items}
          onPress={() => navigation.navigate('TrainerDetails')}
        />
      </ScrollView>
    </PagePrimary>
  );
};

export default Home;
