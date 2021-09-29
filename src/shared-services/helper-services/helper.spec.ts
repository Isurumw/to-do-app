import {
  isValidEmail,
  isValidPassword,
  formattedDate,
  capitalize,
} from './helper';

describe('check the behaviour of helper methods', () => {
  it('check if, the email is valid', () => {
    const mockCorrectEmail = 'test@gmail.com';
    const mockIncorrectEmail = 'test@gmail';

    expect(isValidEmail(mockCorrectEmail)).toEqual(true);
    expect(isValidEmail(mockIncorrectEmail)).toEqual(false);
  });

  it('check if, the passwort is valid', () => {
    const mockCorrectPassword = '12345678';
    const mockIncorrectPassword = '123';

    expect(isValidPassword(mockCorrectPassword)).toEqual(true);
    expect(isValidPassword(mockIncorrectPassword)).toEqual(false);
  });

  it('format the server date correctly', () => {
    const date = '2019-06-11T12:28:46.000Z';
    expect(formattedDate(date)).toEqual('11 Jun 2019');
  });

  it('capitalize a text correctly', () => {
    const text = 'WAITING_FOR_DOCS';
    expect(capitalize(text)).toEqual('Waiting for docs');
  });
});
