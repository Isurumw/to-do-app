import {FirestoreManager} from 'shared-services';
import saveTodo from './save-todo';

jest.mock('shared-services/network-services/network-manager');
const mockedFirestoreManager =
  FirestoreManager as unknown as jest.Mocked<INetworkManager>;

const mockResponse = {
  name: 'projects/todo-8013f/databases/(default)/documents/todos/DOsnkr0lMwVzhU5D77ZU',
  fields: {
    description: {
      stringValue: 'Write down your goals and priorities',
    },
    category: {
      stringValue: 'personal',
    },
  },
  createTime: '2021-09-28T06:44:49.564824Z',
};

describe('check the behaviour of the save-todo natwork service', () => {
  afterEach(() => {
    mockedFirestoreManager.request.mockClear();
  });

  it('save todos successful', async () => {
    mockedFirestoreManager.request.mockImplementation(() => mockResponse);

    const result = await saveTodo(
      'personal',
      'Write down your goals and priorities',
    );

    expect(mockedFirestoreManager.request).toBeCalledTimes(1);
    expect(result).toEqual(mockResponse);
  });

  it('update todos successful', async () => {
    mockedFirestoreManager.request.mockImplementation(() => mockResponse);

    await saveTodo(
      'personal',
      'Write down your goals and priorities',
      'projects/todo-8013f/databases/(default)/documents/todos/DOsnkr0lMwVzhU5D77ZU',
    );

    expect(mockedFirestoreManager.request).toBeCalledTimes(1);
    expect(mockedFirestoreManager.request).toMatchSnapshot();
  });

  it('save todos failed with an error', async () => {
    mockedFirestoreManager.request.mockImplementation(() => {
      throw new Error('Some API Error');
    });

    expect(
      saveTodo('personal', 'Write down your goals and priorities'),
    ).rejects.toThrowErrorMatchingSnapshot();
  });
});
