import 'react-native';
import React from 'react';

import Input from '../input';
import {render, fireEvent} from 'react-native-testing-library';

describe('check the behaviour of the input component', () => {
  it('the input component renders correctly', () => {
    const component = render(<Input label="Email" type="email" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('the input component renders correctly, when it is password', () => {
    const component = render(<Input label="Password" type="password" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('press the eye icon to see or hide the password', () => {
    const mockHandleChangeText: jest.Mock<void> = jest.fn();
    const password = 'todo@123';

    const component = render(
      <Input
        label="Password"
        type="password"
        inputProps={{onChangeText: mockHandleChangeText}}
      />,
    );

    const textInput = component.getByTestId('input_test');
    const btnEye = component.getByTestId('button_eye');

    fireEvent.changeText(textInput, password);
    expect(mockHandleChangeText.mock.calls).toEqual([[password]]);

    fireEvent.press(btnEye);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
