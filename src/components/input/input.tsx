import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  LayoutChangeEvent,
} from 'react-native';

import Eye from 'assets/images/svg/eye.svg';
import EyeOff from 'assets/images/svg/eye-off.svg';

import {styles, onChange} from './input.styles';
import {foundation} from 'styles/colors';

interface IInput {
  inputProps?: TextInputProps;
  contentStyle?: StyleProp<ViewStyle>;
  error?: string;
  label?: string;
  type: 'form' | 'email' | 'password';
  onRef?: (input: TextInput) => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  testId?: string;
}

const Input: React.FC<IInput> = ({
  inputProps,
  contentStyle,
  error,
  label,
  type,
  onRef,
  onLayout,
  testId,
}) => {
  const [shouldSecure, setState] = useState(type === 'password');
  const [isFocus, setFocus] = useState(false);
  const handleVisiblePress = () => setState(!shouldSecure);
  const handleInputFocus = () => setFocus(true);
  const handleInputBlur = () => setFocus(false);

  const RenderError = () => {
    return (error?.length ?? 0) > 0 ? (
      <Text testID={'error_placeholder'} style={styles.error}>
        {error}
      </Text>
    ) : null;
  };

  return (
    <View style={[styles.container, contentStyle]} onLayout={onLayout}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={[
          styles.subcontainer,
          onChange(
            (error ?? '').length > 0 ? 'error' : isFocus ? 'focus' : 'blur',
          ).border,
        ]}>
        <TextInput
          allowFontScaling={false}
          testID={testId ?? 'input_test'}
          selectionColor={foundation.grape}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          secureTextEntry={shouldSecure}
          style={styles.input}
          {...inputProps}
          ref={onRef}
        />
        {type === 'password' ? (
          <TouchableOpacity testID={'button_eye'} onPress={handleVisiblePress}>
            {shouldSecure ? (
              <EyeOff height={20} width={20} fill={foundation.eggplant} />
            ) : (
              <Eye height={20} width={20} fill={foundation.eggplant} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      <RenderError />
    </View>
  );
};

export default Input;
