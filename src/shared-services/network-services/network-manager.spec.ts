import fetchMock from 'jest-fetch-mock';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';

import NetworkManager from './network-manager';
import _StorageService from '../storage-service/storage-service';

import {AUTH_TOKEN_KEY} from 'utils/constants';

const StorageService = new _StorageService(AsyncStorage);

jest.mock('react-native-config', () => ({
  BASEURL: 'URL/',
  AUTH_KEY: 'mock_api_key',
}));

jest.mock('../storage-service/storage-service');
const mockedStorageService = StorageService as unknown as jest.Mocked<IStorage>;

describe('check the behaviour of the shared network client', () => {
  const networkManager = new NetworkManager(
    Config.BASEURL,
    Config.AUTH_KEY,
    mockedStorageService,
    fetch,
  );

  beforeEach(() => {
    const returnValue = {
      json: jest.fn(async () => ({
        firstName: 'first_name',
        lastName: 'last_name',
      })),
    };

    fetchMock.mockImplementation(async (): Promise<any> => {
      return Promise.resolve(returnValue);
    });
  });

  afterEach(() => {
    mockedStorageService.get.mockClear();
    fetchMock.mockClear();
  });

  it('check network client - POST', async (): Promise<void> => {
    mockedStorageService.get.mockImplementationOnce(() =>
      Promise.resolve('mock_token'),
    );

    const response = await networkManager.request('user', 'POST', {
      id: 'mock_user_id',
    });

    //check number of calls on fetch client
    expect(fetch).toBeCalledTimes(1);

    //Check the first argument of the call on storage service
    expect(StorageService.get).toHaveBeenCalledWith(AUTH_TOKEN_KEY);

    // check if the return value is correct
    expect(response).toEqual({
      firstName: 'first_name',
      lastName: 'last_name',
    });

    // check the query and fetch client payload
    expect(fetch).toHaveBeenCalledWith('URL/user?key=mock_api_key', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-access-token': 'mock_token',
      },
      body: JSON.stringify({id: 'mock_user_id'}),
    });
  });
});
