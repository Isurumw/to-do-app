import {FirestoreManager} from 'shared-services';

import pickId from '../pick-id/pick-id';

type Response = {};

const deleteTodo = async (name: string) => {
  const id = pickId(name);
  const response = await FirestoreManager.request<Response>(
    `todos/${id}`,
    'DELETE',
  );

  return response;
};

export default deleteTodo;
