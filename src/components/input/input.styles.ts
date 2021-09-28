import {StyleSheet, Platform} from 'react-native';
import {fontStyles} from 'styles/font.style';
import {foundation} from 'styles/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  subcontainer: {
    marginTop: 4,
    marginBottom: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: foundation.white,
    ...Platform.select({
      ios: {
        paddingVertical: 15,
      },
    }),
  },
  label: {
    color: foundation.pewter,
    ...fontStyles.inputLabel,
  },
  input: {
    flex: 1,
    color: foundation.satin,
    ...fontStyles.body,
  },
  error: {
    color: foundation.watermelon,
    ...fontStyles.inputLabel,
  },
});

export const onChange = (type?: 'focus' | 'blur' | 'error') =>
  StyleSheet.create({
    border: {
      borderColor:
        type === 'focus'
          ? foundation.grape
          : type === 'blur'
          ? foundation.tin
          : foundation.watermelon,
    },
  });
