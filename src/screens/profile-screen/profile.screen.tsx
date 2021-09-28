import React from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from 'redux-helper/reducers';
import {onResetAuth} from 'redux-helper/actions/auth/auth.action';
import {onResetAllTodos} from 'redux-helper/actions/todo/todo.action';
import {onResetUser} from 'redux-helper/actions/user/user.action';

import {StorageService} from 'shared-services';

import ProgressiveImage from 'components/custom-images/progressive-image';
import RecordList from './components/record-list/record-list';

import LogoutIcon from 'assets/images/svg/logout.svg';
import Profile from 'assets/images/svg/profile-user.svg';

import {AUTH_TOKEN_KEY} from 'utils/constants';
import {SIGNIN_SCREEN} from 'navigation/screen-names';

import {foundation} from 'styles/colors';
import styles from './profile.styles';

const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {user} = useSelector((state: ApplicationState) => state.userReducer);

  const actionLogout = () => {
    Alert.alert(
      'Alert',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Okay', onPress: signout},
      ],
      {cancelable: false},
    );
  };

  const signout = () => {
    clearStorage();
    dispatch(onResetAuth());
    dispatch(onResetAllTodos());
    dispatch(onResetUser());
    navigation.dispatch(StackActions.replace(SIGNIN_SCREEN));
  };

  const clearStorage = async () => {
    try {
      await Promise.all([StorageService.remove(AUTH_TOKEN_KEY)]);
    } catch (e) {
      // TODO: detect error
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity style={styles.containerLogout} onPress={actionLogout}>
          <LogoutIcon style={styles.imgLogout} fill={foundation.satin} />
        </TouchableOpacity>
        <View style={styles.containerTopMiddle}>
          <ProgressiveImage
            url={user?.image.stringValue}
            containerStyle={styles.imgProfileContainer}
            imageStyle={styles.imgProfile}
            Placeholder={Profile}
          />
          {user && (
            <Text
              style={
                styles.txtName
              }>{`${user.firstName.stringValue} ${user.lastName.stringValue}`}</Text>
          )}
        </View>
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.txtSubTitle}>General</Text>
        {user && <RecordList user={user} />}
      </View>
    </View>
  );
};

export default ProfileScreen;
