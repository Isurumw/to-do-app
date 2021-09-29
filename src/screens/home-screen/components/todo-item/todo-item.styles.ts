import {StyleSheet} from 'react-native';

import {fontStyles} from 'styles/font.style';
import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: foundation.white,
    borderRadius: 12,
    shadowColor: foundation.satin,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 7,
    elevation: 10,
    shadowOpacity: 0.2,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  containerRight: {
    flex: 1,
    marginLeft: 15,
  },
  imgIcon: {
    width: 30,
    height: 30,
  },
  imgBinIcon: {
    width: 15,
    height: 15,
  },
  txtTitle: {
    color: foundation.satin,
    ...fontStyles.bodyBold,
  },
  txtItemCount: {
    color: foundation.grape,
    ...fontStyles.body,
  },
  txtItemDescription: {
    color: foundation.pewter,
    ...fontStyles.body,
  },
});

export default styles;
