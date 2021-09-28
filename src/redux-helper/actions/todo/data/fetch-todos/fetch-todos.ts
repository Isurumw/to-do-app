import {FirestoreManager} from 'shared-services';

type Response = {
  documents: Todo[];
};

const fetchTodos = async () => {
  const response = await FirestoreManager.request<Response>('todos', 'GET');

  const {documents} = response;

  return documents;
};

export default fetchTodos;
