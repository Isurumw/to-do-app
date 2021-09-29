import {FirestoreManager} from 'shared-services';
import fetchTodos from './fetch-todos';

jest.mock('shared-services/network-services/network-manager');
const mockedFirestoreManager =
  FirestoreManager as unknown as jest.Mocked<INetworkManager>;

const mockResponse = {
  documents: [
    {
      name: 'projects/todo-8013f/databases/(default)/documents/todos/4tv4cXgCJYqalcTNaUCT',
      fields: {
        description: {
          stringValue: 'Decide what medium works best for you',
        },
        category: {
          stringValue: 'work',
        },
      },
      createTime: '2021-09-28T06:52:27.470415Z',
    },
    {
      name: 'projects/todo-8013f/databases/(default)/documents/todos/AQq016UeVdVxkXGjBMve',
      fields: {
        description: {
          stringValue: 'Apply for uLethbridge awards and scholarships',
        },
        category: {
          stringValue: 'school',
        },
      },
      createTime: '2021-09-28T06:40:35.637640Z',
    },
    {
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
    },
  ],
};

const mockResult = [
  {
    name: 'projects/todo-8013f/databases/(default)/documents/todos/4tv4cXgCJYqalcTNaUCT',
    fields: {
      description: {
        stringValue: 'Decide what medium works best for you',
      },
      category: {
        stringValue: 'work',
      },
    },
    createTime: '2021-09-28T06:52:27.470415Z',
  },
  {
    name: 'projects/todo-8013f/databases/(default)/documents/todos/AQq016UeVdVxkXGjBMve',
    fields: {
      description: {
        stringValue: 'Apply for uLethbridge awards and scholarships',
      },
      category: {
        stringValue: 'school',
      },
    },
    createTime: '2021-09-28T06:40:35.637640Z',
  },
  {
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
  },
];

describe('check the behaviour of the fetch-todo natwork service', () => {
  afterEach(() => {
    mockedFirestoreManager.request.mockClear();
  });

  it('fetch todos successful', async () => {
    mockedFirestoreManager.request.mockImplementation(() => mockResponse);

    const response = await fetchTodos();

    expect(mockedFirestoreManager.request).toBeCalledTimes(1);
    expect(response).toEqual(mockResult);
  });

  it('fetch todos failed with an error', async () => {
    mockedFirestoreManager.request.mockImplementation(() => {
      throw new Error('Some API Error');
    });

    expect(fetchTodos()).rejects.toThrowErrorMatchingSnapshot();
  });
});
