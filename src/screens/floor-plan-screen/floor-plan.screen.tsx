import React from 'react';
import {View} from 'react-native';

import FloorplanImage from 'assets/images/svg/floorplan-sample.svg';

import {foundation} from 'styles/colors';
import styles from './floor-plan.styles';

const FloorPlanScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <FloorplanImage style={styles.imgFloorPlan} fill={foundation.grape} />
    </View>
  );
};

export default FloorPlanScreen;
