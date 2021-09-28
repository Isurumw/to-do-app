import {StyleSheet} from 'react-native';
import {foundation, functional} from 'styles/colors';
import {fontStyles} from 'styles/font.style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 10,
    position: 'absolute',
    flexDirection: 'row',
    top: 47,
    zIndex: 3,
    elevation: 3,
    backgroundColor: foundation.white,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
  },
  alertIcon: {
    width: 20,
    height: 20,
  },
  error: {
    borderColor: functional.bloodRed,
  },
  errorText: {
    marginLeft: 10,
    color: functional.bloodRed,
    ...fontStyles.body,
    textAlign: 'left',
    flex: 1,
  },
  success: {
    borderColor: functional.kiwi,
  },
  successText: {
    color: functional.kiwi,
    ...fontStyles.body,
  },
});

export default styles;
