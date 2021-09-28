import {FirestoreManager} from 'shared-services';
import fetchUser from './fetch-user';

jest.mock('shared-services/network-services/network-manager');
const mockedFirestoreManager =
  FirestoreManager as unknown as jest.Mocked<INetworkManager>;

const mockResponse = {
  documents: [
    {
      name: 'projects/todo-8013f/databases/(default)/documents/users/X00g6tPWHrFcYzpIynzJ',
      fields: {
        firstName: {
          stringValue: 'Isuru',
        },
        lastName: {
          stringValue: 'Madusanka',
        },
        phone: {
          stringValue: '+94 71 08 43196',
        },
        age: {
          integerValue: '29',
        },
        image: {
          stringValue:
            'https://firebasestorage.googleapis.com/v0/b/todo-8013f.appspot.com/o/isuru_profile.png?alt=media&token=8d3e0c01-f411-45d5-97f2-bbafcb53e897',
        },
        gender: {
          stringValue: 'male',
        },
      },
      createTime: '2021-09-27T09:35:54.418567Z',
      updateTime: '2021-09-27T18:22:03.888918Z',
    },
  ],
};

describe('check the behaviour of the fetch-user natwork service', () => {
  afterEach(() => {
    mockedFirestoreManager.request.mockClear();
  });

  it('fetch user successful', async () => {
    mockedFirestoreManager.request.mockImplementation(() => mockResponse);

    const response = await fetchUser();

    expect(mockedFirestoreManager.request).toBeCalledTimes(1);
    expect(response).toEqual({
      firstName: {
        stringValue: 'Isuru',
      },
      lastName: {
        stringValue: 'Madusanka',
      },
      phone: {
        stringValue: '+94 71 08 43196',
      },
      age: {
        integerValue: '29',
      },
      image: {
        stringValue:
          'https://firebasestorage.googleapis.com/v0/b/todo-8013f.appspot.com/o/isuru_profile.png?alt=media&token=8d3e0c01-f411-45d5-97f2-bbafcb53e897',
      },
      gender: {
        stringValue: 'male',
      },
    });
  });

  it('fetch user failed with an error', async () => {
    mockedFirestoreManager.request.mockImplementation(() => {
      throw new Error('Some API Error');
    });

    expect(fetchUser()).rejects.toThrowErrorMatchingSnapshot();
  });
});
