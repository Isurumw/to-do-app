import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SigninScreen, EditTodoScreen} from 'screens';
import BottomTabNavigator from '../bottom-tab-navigator/bottom-tab-navigator';

import {
  BOTTOM_TAB_NAVIGATOR,
  SIGNIN_SCREEN,
  EDIT_TODO_SCREEN,
} from '../screen-names';

import {foundation} from 'styles/colors';
import styles from './root-stack-navigator.styles';

export type RootStackParams = {
  [SIGNIN_SCREEN]: undefined;
  [BOTTOM_TAB_NAVIGATOR]: undefined;
  [EDIT_TODO_SCREEN]: undefined;
};

interface IRootStackProps {
  initialRouteName?: any;
}

const Stack = createStackNavigator<RootStackParams>();

const RootStackNavigator: React.FC<IRootStackProps> = ({initialRouteName}) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName || SIGNIN_SCREEN}>
      <Stack.Screen
        name={SIGNIN_SCREEN}
        component={SigninScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name={BOTTOM_TAB_NAVIGATOR}
        component={BottomTabNavigator}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name={EDIT_TODO_SCREEN}
        component={EditTodoScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: foundation.satin,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
