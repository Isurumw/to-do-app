import {StyleSheet} from 'react-native';

import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: foundation.white,
  },
  containerRecord: {
    marginBottom: 20,
  },
  containerScroll: {
    flexGrow: 1,
  },
});

export default styles;
