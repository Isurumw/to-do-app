import Config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';

import _NetworkManager from './network-services/network-manager';
import _StorageService from './storage-service/storage-service';

const StorageService = new _StorageService(AsyncStorage);
const NetworkManager = new _NetworkManager(
  Config.AUTH_BASE,
  Config.AUTH_KEY,
  StorageService,
  fetch,
);
const FirestoreManager = new _NetworkManager(
  Config.FIRESTORE_BASE,
  Config.AUTH_KEY,
  StorageService,
  fetch,
);

export {NetworkManager, FirestoreManager, StorageService};
