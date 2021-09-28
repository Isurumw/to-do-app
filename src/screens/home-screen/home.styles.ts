import {StyleSheet} from 'react-native';

import {fontStyles} from 'styles/font.style';
import {foundation} from 'styles/colors';

const common = Object.assign(
  StyleSheet.create({
    shadow: {
      shadowColor: foundation.satin,
      shadowOffset: {width: 1, height: 1},
      shadowRadius: 7,
      elevation: 10,
    },
  }),
);

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
    ...common.shadow,
    paddingTop: 10,
  },
  title: {
    color: foundation.satin,
    ...fontStyles.heading1,
    bottom: 30,
    left: 16,
    position: 'absolute',
  },
  containerItem: {
    marginBottom: 25,
  },
  containerList: {
    paddingTop: 20,
    paddingHorizontal: 24,
  },
  btnFloatingAction: {
    alignSelf: 'flex-end',
    width: 52,
    aspectRatio: 1,
    borderRadius: 40,
    backgroundColor: foundation.grape,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: foundation.satin,
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    end: 16,
    bottom: 16,
    elevation: 4,
    position: 'absolute',
  },
  imgAdd: {
    width: 24,
    height: 24,
  },
});

export default styles;
