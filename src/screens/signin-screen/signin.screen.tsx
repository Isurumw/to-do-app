import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {onAuth} from 'redux-helper/actions/auth/auth.action';
import {ApplicationState} from 'redux-helper/reducers';

import {
  isValidEmail,
  isValidPassword,
} from 'shared-services/helper-services/helper';

import Input from 'components/input/input';
import Button from 'components/custom-button/button';
import LoginIcon from 'assets/images/svg/login.svg';

import {BOTTOM_TAB_NAVIGATOR} from 'navigation/screen-names';
import styles from './signin.styles';

const SigninScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {registered, loading} = useSelector(
    (state: ApplicationState) => state.authReducer,
  );

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<TextInput>();

  const actionNavigation = () => {
    if (!isValidEmail(email)) {
      return setEmailError('Invalid email address');
    }
    if (!isValidPassword(password)) {
      return setPasswordError('Password should be 8 characters or more');
    }

    dispatch(onAuth(email, password));
  };

  useEffect(() => {
    if (registered) {
      navigation.navigate(BOTTOM_TAB_NAVIGATOR);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registered]);

  const onFocusNext = () => {
    passwordInput?.focus();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 72 : 0}>
          <View>
            <Text style={styles.title}>Sign in to your todos</Text>
            <Input
              contentStyle={styles.inputEmail}
              label="Email"
              type="email"
              error={emailError}
              inputProps={{
                keyboardAppearance: 'dark',
                keyboardType: 'email-address',
                placeholder: 'Enter your email address',
                autoCorrect: false,
                returnKeyType: 'next',
                onChangeText: (text: string) => setEmail(text.trim()),
                onTextInput: () => setEmailError(''),
                onSubmitEditing: onFocusNext,
                editable: !loading,
                autoCapitalize: 'none',
              }}
            />
            <Input
              label="Password"
              type="password"
              error={passwordError}
              contentStyle={styles.inputPassword}
              onRef={(input: TextInput) => setPasswordInput(input)}
              inputProps={{
                keyboardAppearance: 'dark',
                placeholder: 'Enter your password',
                onChangeText: (text: string) => setPassword(text),
                onTextInput: () => setPasswordError(''),
                editable: !loading,
              }}
            />
          </View>
          <Button
            label="SIGN IN"
            onPress={actionNavigation}
            containerStyle={styles.btnNavigation}
            Icon={LoginIcon}
            disabled={email.length === 0 || password.length === 0}
            loading={loading}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SigninScreen;
