import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

import styles from './separator.styles';

export interface ISeparator {
  containerStyle?: StyleProp<ViewStyle>;
}

const Separator: React.FC<ISeparator> = ({containerStyle}) => {
  return (
    <View style={[styles.separatorView, containerStyle]}>
      <View style={styles.separator} />
    </View>
  );
};

export default Separator;
