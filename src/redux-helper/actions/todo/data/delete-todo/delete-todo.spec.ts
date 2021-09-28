import {FirestoreManager} from 'shared-services';
import deleteTodo from './delete-todo';

jest.mock('shared-services/network-services/network-manager');
const mockedFirestoreManager =
  FirestoreManager as unknown as jest.Mocked<INetworkManager>;

const mockName =
  'projects/todo-8013f/databases/(default)/documents/todos/FDv0SIXHmpCCcHX3Cp7S';

describe('check the behaviour of the delete-todo natwork service', () => {
  afterEach(() => {
    mockedFirestoreManager.request.mockClear();
  });

  it('deleted todos successful', async () => {
    mockedFirestoreManager.request.mockImplementation(() => {});

    await deleteTodo(mockName);

    expect(mockedFirestoreManager.request).toBeCalledTimes(1);
  });

  it('delete todos failed with an error', async () => {
    mockedFirestoreManager.request.mockImplementation(() => {
      throw new Error('Some API Error');
    });

    expect(deleteTodo(mockName)).rejects.toThrowErrorMatchingSnapshot();
  });
});
