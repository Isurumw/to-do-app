import {StyleSheet} from 'react-native';

import {fontStyles} from 'styles/font.style';
import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: foundation.aluminum,
  },
  containerTop: {
    flex: 1,
    paddingHorizontal: 16,
  },
  containerBottom: {
    flex: 4,
    backgroundColor: foundation.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowOpacity: 0.4,
    shadowColor: foundation.satin,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 7,
    elevation: 10,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: foundation.satin,
    ...fontStyles.heading1,
    bottom: 30,
    left: 16,
    position: 'absolute',
  },
});

export default styles;
