import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

// eslint-disable-next-line no-undef
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
