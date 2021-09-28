import React from 'react';
import {StyleProp, ViewStyle, Text, TouchableOpacity, View} from 'react-native';
import {SvgProps} from 'react-native-svg';

import PencilIcon from 'assets/images/svg/pencil.svg';

import {foundation} from 'styles/colors';
import styles from './todo-item.styles';

export interface ITodoItem {
  title: string;
  date: string;
  Icon: React.FC<SvgProps>;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const TodoItem: React.FC<ITodoItem> = ({
  title,
  date,
  Icon,
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Icon style={styles.imgIcon} fill={foundation.grape} />
      <View style={styles.containerRight}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text style={styles.txtItemDescription}>
          Created at <Text style={styles.txtItemCount}>{date}</Text>
        </Text>
      </View>
      <PencilIcon style={styles.imgBinIcon} fill={foundation.pewter} />
    </TouchableOpacity>
  );
};

export default TodoItem;
