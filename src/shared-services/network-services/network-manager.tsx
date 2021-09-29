import {AUTH_TOKEN_KEY} from 'utils/constants';

class NetworkManager implements INetworkManager {
  private base: string;
  private fetch: (
    input: RequestInfo,
    init?: RequestInit | undefined,
  ) => Promise<Response>;
  private storageService: IStorage;
  private apiKey: string;

  public constructor(base: string, key: string, storage: IStorage, fetch: any) {
    this.base = base;
    this.fetch = fetch;
    this.storageService = storage;
    this.apiKey = key;
  }

  public async request<T>(
    route: string,
    method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH',
    variables?: object,
  ): Promise<T> {
    try {
      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
      const token = await this.storageService.get(AUTH_TOKEN_KEY);
      const url = `${this.base}${route}?key=${this.apiKey}`;

      let body: {} = {};

      if (variables) {
        body = variables;
      }

      if (token) {
        headers = {
          ...headers,
          ...{'x-access-token': token},
        };
      }

      const response = await this.fetch(url, {
        method: method,
        headers,
        body: variables ? JSON.stringify(body) : null,
      });

      return response.json();
    } catch (e) {
      throw e;
    }
  }
}

export default NetworkManager;
