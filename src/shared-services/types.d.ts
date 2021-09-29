declare interface IStorage {
  get(key: string): Promise<string | undefined>;
  getObject<P>(key: string): Promise<P | undefined>;
  set(key: string, value: string): Promise<void>;
  remove(key: string): void;
}

declare interface INetworkManager {
  request(
    route: string,
    method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH',
    variables?: object | null,
  ): any;
}
