import {FirestoreManager} from 'shared-services';

type Response = {
  documents: [
    {
      name: string;
      fields: User;
    },
  ];
};

const fetchUser = async () => {
  const response = await FirestoreManager.request<Response>('users', 'GET');

  const {documents} = response;

  return documents[0].fields;
};

export default fetchUser;
