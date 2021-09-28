import {StyleSheet, Platform} from 'react-native';

import {fontStyles} from 'styles/font.style';
import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: foundation.aluminum,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputDescription: {
    marginTop: 20,
  },
  imgBin: {
    ...Platform.select({
      ios: {
        width: 24,
        height: 24,
      },
      android: {
        width: 20,
        height: 20,
      },
    }),
  },
  btnBin: {
    marginRight: 6,
  },
  itemPicker: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: foundation.white,
    borderColor: foundation.tin,
    marginTop: 4,
  },
  txtCategory: {
    color: foundation.pewter,
    ...fontStyles.inputLabel,
  },
  btnSave: {
    marginBottom: 20,
  },
});

export default styles;
