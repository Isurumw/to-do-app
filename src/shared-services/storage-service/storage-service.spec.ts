import AsyncStorage from '@react-native-community/async-storage';
import StorageService from './storage-service';

const storage = new StorageService(AsyncStorage);

describe('check the behaviour of the storage service wrapper', () => {
  it('check method GET for a supplied key', async () => {
    AsyncStorage.getItem = jest.fn(() => Promise.resolve('test_value'));

    await storage.get('test_key');
    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('test_key');
  });

  it('check method GET, when there is an error', async () => {
    AsyncStorage.getItem = jest.fn(() =>
      Promise.reject(new Error('Failed to fetch the value')),
    );

    expect(storage.get('test_key')).rejects.toMatchSnapshot();
  });

  it('check method Set, when trying to store an item in the storage', async () => {
    const mockUser = {
      firstName: 'first_name',
      lastName: 'last_name',
    };
    AsyncStorage.setItem = jest.fn();

    await storage.set('user', JSON.stringify(mockUser));

    expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      'user',
      JSON.stringify(mockUser),
    );
  });
});
