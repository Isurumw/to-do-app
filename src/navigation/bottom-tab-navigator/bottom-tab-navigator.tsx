import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useDispatch} from 'react-redux';
import {onUser} from 'redux-helper/actions/user/user.action';
import {onFetchTodo} from 'redux-helper/actions/todo/todo.action';

import {HomeScreen, FloorPlanScreen, ProfileScreen} from 'screens';

import HomeIcon from 'assets/images/svg/home.svg';
import UserIcon from 'assets/images/svg/user.svg';
import HousePlanIcon from 'assets/images/svg/house-plan.svg';

import {foundation} from 'styles/colors';

type BottomTabParams = {
  Home: undefined;
  'Floor Plan': undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParams>();

const BottomTabNavigator: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onUser());
    dispatch(onFetchTodo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: foundation.grape,
        tabBarInactiveTintColor: foundation.pewter,
        tabBarIcon: ({color}) => {
          if (route.name === 'Home') {
            return <HomeIcon width={23} height={23} fill={color} />;
          } else if (route.name === 'Profile') {
            return <UserIcon width={20} height={20} fill={color} />;
          } else {
            return <HousePlanIcon width={23} height={23} fill={color} />;
          }
        },
      })}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Floor Plan"
        component={FloorPlanScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
