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
    flex: 3,
    justifyContent: 'center',
  },
  containerTopMiddle: {
    alignItems: 'center',
    ...common.shadow,
    shadowOpacity: 0.7,
  },
  containerBottom: {
    flex: 4,
    paddingTop: 30,
    paddingHorizontal: 16,
    backgroundColor: foundation.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    ...common.shadow,
    shadowOpacity: 0.4,
  },
  txtSubTitle: {
    color: foundation.pewter,
    opacity: 0.4,
    ...fontStyles.heading5,
    marginBottom: 15,
  },
  txtName: {
    color: foundation.satin,
    ...fontStyles.heading3,
    marginTop: 10,
  },
  imgProfile: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  imgProfileContainer: {
    width: 126,
    height: 126,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 63,
    borderWidth: 6,
    borderColor: foundation.grape40,
  },
  imgLogout: {
    width: 17,
    height: 17,
  },
  containerLogout: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: foundation.white,
    borderRadius: 30,
    marginRight: 15,
    ...common.shadow,
    shadowOpacity: 0.09,
    marginBottom: 10,
  },
});

export default styles;
