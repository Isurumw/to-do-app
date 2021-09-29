import React from 'react';
import {View, Text} from 'react-native';

import {useSelector} from 'react-redux';
import {ApplicationState} from 'redux-helper/reducers';

import WarningIcon from 'assets/images/svg/warning.svg';

import {functional} from 'styles/colors';
import styles from './alert.style';

const Alert: React.FC = (): JSX.Element | null => {
  const {error} = useSelector((state: ApplicationState) => state.alertReducer);

  if (error) {
    return (
      <View style={[styles.container, styles.error]}>
        <WarningIcon style={styles.alertIcon} fill={functional.bloodRed} />
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return null;
};

export default Alert;
