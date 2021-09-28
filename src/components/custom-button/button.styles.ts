import {StyleSheet} from 'react-native';
import {foundation} from 'styles/colors';
import {fontStyles} from 'styles/font.style';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingVertical: 12,
    borderRadius: 50,
  },
  active: {
    backgroundColor: foundation.grape,
  },
  disabled: {
    backgroundColor: foundation.stone,
  },
  txtLabel: {
    color: foundation.white,
    ...fontStyles.button,
  },
  btnIcon: {
    marginLeft: 8,
    width: 12,
    height: 12,
  },
});

export default styles;
