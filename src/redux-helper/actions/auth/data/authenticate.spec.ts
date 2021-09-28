import {NetworkManager, StorageService} from 'shared-services';
import authenticate from './authenticate';

jest.mock('shared-services/network-services/network-manager');
const mockedNetworkManager =
  NetworkManager as unknown as jest.Mocked<INetworkManager>;

jest.mock('shared-services/storage-service/storage-service');
const mockedStorageService = StorageService as unknown as jest.Mocked<IStorage>;

describe('check the behaviour of the authenticate natwork service', () => {
  afterEach(() => {
    mockedNetworkManager.request.mockClear();
    mockedStorageService.set.mockClear();
  });

  it('user authentication successful', async () => {
    mockedStorageService.set = jest.fn();

    mockedNetworkManager.request.mockImplementation(() => ({
      kind: 'identitytoolkit#VerifyPasswordResponse',
      localId: 'gbl9goSb0cWtVPeS7HA7was54Q02',
      email: 'isuru@gmail.com',
      displayName: '',
      idToken: 'mock_token',
      registered: true,
    }));

    const response = await authenticate('mock_email', 'mock_password');

    expect(mockedNetworkManager.request).toBeCalledTimes(1);
    expect(mockedStorageService.set).toBeCalledTimes(1);
    expect(response).toEqual(true);
  });

  it('user authentication failed with an error', async () => {
    mockedNetworkManager.request.mockImplementation(() => {
      throw new Error('Some API Error');
    });

    expect(
      authenticate('mock_email', 'mock_password'),
    ).rejects.toThrowErrorMatchingSnapshot();
  });
});
