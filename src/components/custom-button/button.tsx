import React from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Text,
  ActivityIndicator,
} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {foundation} from 'styles/colors';
import styles from './button.styles';

export interface IButton {
  label: String;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  Icon?: React.FC<SvgProps>;
  containerStyle?: StyleProp<ViewStyle>;
  testId?: string;
}

const Button: React.FC<IButton> = ({
  label,
  onPress,
  disabled = false,
  loading = false,
  Icon,
  containerStyle,
  testId = 'custom_button',
}) => {
  const Content = () => (
    <>
      {loading ? (
        <ActivityIndicator size="small" color={foundation.white} />
      ) : (
        <>
          <Text style={styles.txtLabel}>{label}</Text>
          {Icon && <Icon style={styles.btnIcon} fill={foundation.white} />}
        </>
      )}
    </>
  );

  return (
    <TouchableOpacity
      testID={testId}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.container,
        containerStyle,
        disabled ? styles.disabled : styles.active,
      ]}>
      <Content />
    </TouchableOpacity>
  );
};

export default Button;
