/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import store from 'redux-helper/store/store';

import {StorageService} from 'shared-services';

import Alert from 'components/custom-alert/alert';

import RootStackNavigator from 'navigation/root-stack-navigator/root-stack-navigator';
import {SIGNIN_SCREEN, BOTTOM_TAB_NAVIGATOR} from 'navigation/screen-names';
import {AUTH_TOKEN_KEY} from 'utils/constants';

const App = () => {
  const [initialRoute, setInitialRoute] = useState<string | undefined>();

  const checkInitialRoute = async () => {
    try {
      const token = await StorageService.get(AUTH_TOKEN_KEY)!;
      setInitialRoute(token ? BOTTOM_TAB_NAVIGATOR : SIGNIN_SCREEN);
    } catch (e) {
      setInitialRoute(SIGNIN_SCREEN);
    }
  };

  useEffect(() => {
    checkInitialRoute();
  }, []);

  if (!initialRoute) {
    return null;
  }

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <Provider store={store}>
        <Alert />
        <NavigationContainer>
          <RootStackNavigator initialRouteName={initialRoute} />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
