import React from 'react';
import {View, StyleProp, ViewStyle, Text} from 'react-native';
import {SvgProps} from 'react-native-svg';

import Separator from 'components/separator/separator';

import {foundation} from 'styles/colors';
import styles from './record.styles';

export interface IRecord {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  Icon?: React.FC<SvgProps>;
}

const Record: React.FC<IRecord> = ({title, containerStyle, Icon}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.containerMiddle}>
        {Icon && (
          <View style={styles.containerIcon}>
            <Icon style={styles.imgIcon} fill={foundation.satin} />
          </View>
        )}
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
      <Separator containerStyle={styles.containerSeparator} />
    </View>
  );
};

export default Record;
