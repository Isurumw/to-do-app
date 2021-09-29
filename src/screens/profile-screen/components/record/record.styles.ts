import {StyleSheet} from 'react-native';

import {fontStyles} from 'styles/font.style';
import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: foundation.white,
  },
  containerMiddle: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  containerIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: foundation.aluminum,
    borderRadius: 15,
    marginRight: 15,
  },
  containerSeparator: {
    paddingLeft: 55,
  },
  imgIcon: {
    width: 20,
    height: 20,
  },
  txtTitle: {
    color: foundation.satin,
    ...fontStyles.bodyBold,
  },
});

export default styles;
