import 'react-native';
import React from 'react';

import Button from '../button';
import {render, fireEvent} from 'react-native-testing-library';

describe('check the behaviour of the custom button component', () => {
  it('the custom button component renders correctly', () => {
    const component = render(<Button label="SIGN IN" onPress={jest.fn()} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('press the button', () => {
    const mockHandleButtonPress: jest.Mock<void> = jest.fn();

    const component = render(
      <Button label="SIGN IN" onPress={mockHandleButtonPress} />,
    );

    const button = component.getByTestId('custom_button');

    fireEvent.press(button);
    expect(mockHandleButtonPress).toBeCalledTimes(1);
  });
});
