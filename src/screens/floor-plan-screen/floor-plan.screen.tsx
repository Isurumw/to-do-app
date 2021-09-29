import React from 'react';
import {View, GestureResponderEvent, Alert, Text} from 'react-native';

import FloorplanImage from 'assets/images/svg/floorplan-sample.svg';

import {foundation} from 'styles/colors';
import styles from './floor-plan.styles';

const FloorPlanScreen: React.FC = () => {
  const onPressLayout = (event: GestureResponderEvent) => {
    const nativeEvent = event.nativeEvent;
    actionLayout(nativeEvent.locationX, nativeEvent.locationY);
  };

  const actionLayout = (x: number, y: number) => {
    Alert.alert(
      'The Coordinates',
      `X=${x} and Y=${y}`,
      [{text: 'Okay', style: 'cancel'}],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.title}>Check your floor-plan</Text>
      </View>
      <View style={styles.containerBottom}>
        <FloorplanImage
          height="90%"
          width="90%"
          strokeWidth={0.4}
          stroke={foundation.pewter}
          onTouchStart={onPressLayout}
        />
      </View>
    </View>
  );
};

export default FloorPlanScreen;
