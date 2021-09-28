import {NetworkManager, StorageService} from 'shared-services';
import {AUTH_TOKEN_KEY} from 'utils/constants';

type Response = {
  kind: string;
  localId: string;
  email: string;
  idToken: string;
  registered: boolean;
};

const authenticate = async (email: string, password: string) => {
  const response = await NetworkManager.request<Response>(
    'accounts:signInWithPassword',
    'POST',
    {email: email, password: password},
  );

  const {idToken, registered} = response;

  await StorageService.set(AUTH_TOKEN_KEY, idToken);

  return registered;
};

export default authenticate;
