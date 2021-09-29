import {FirestoreManager} from 'shared-services';

import pickId from '../pick-id/pick-id';

type Response = Todo;

const saveTodo = async (
  category: string,
  description: string,
  name?: string,
) => {
  const id = name ? pickId(name) : undefined;
  const route = id ? `todos/${id}` : 'todos';
  const method = id ? 'PATCH' : 'POST';
  const response = await FirestoreManager.request<Response>(route, method, {
    fields: {
      category: {
        stringValue: category,
      },
      description: {
        stringValue: description,
      },
    },
  });

  return response;
};

export default saveTodo;
