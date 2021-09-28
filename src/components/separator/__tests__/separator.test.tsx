import React from 'react';
import {render} from 'react-native-testing-library';

import Separator from '../separator';

describe('check the behaviour of the separator component', () => {
  it('the separator component renders correctly', () => {
    const component = render(<Separator />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
