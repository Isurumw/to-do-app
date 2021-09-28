import {StyleSheet} from 'react-native';

import {fontStyles} from 'styles/font.style';
import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 70,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: foundation.satin,
    ...fontStyles.heading2,
  },
  btnNavigation: {
    marginBottom: 20,
  },
  txtNavigation: {
    color: foundation.white,
    ...fontStyles.button,
  },
  inputEmail: {
    marginTop: 30,
  },
  inputPassword: {
    marginTop: 17,
  },
});

export default styles;
