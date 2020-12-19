import React from 'react';
import {TextComponent} from '../../components/ui';
import {PagePrimary, VerticalCard} from '../../components/widget';

const Home = () => {
  return (
    <PagePrimary>
      <TextComponent content="hello" />
      <VerticalCard
        title="Bally Total Fitness"
        subtitle="Established in 1999 this is the best gym in this area with 1200 registered clients"
        point="3.8 ml"
        rating="3.9"
      />
    </PagePrimary>
  );
};

export default Home;
