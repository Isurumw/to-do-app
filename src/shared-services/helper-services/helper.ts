import moment from 'moment-timezone';

import {EMAIL_REGEX} from 'utils/constants';
import {DATE_VIEW_FORMAT} from 'utils/constants';

export const formattedDate = (dateString: string) => {
  const date = moment(dateString);
  return date.format(DATE_VIEW_FORMAT);
};

export const isValidEmail = (email?: string) => {
  return !email ? false : EMAIL_REGEX.test(email);
};

export const isValidPassword = (password: string) => {
  return password.length >= 8;
};

export const capitalize = (text: string): string => {
  const word = text.split('_').join(' ');
  const lowerCaseText = word.toLowerCase();
  return lowerCaseText.charAt(0).toUpperCase() + lowerCaseText.slice(1);
};
