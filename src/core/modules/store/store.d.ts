import { Framework7Plugin } from '../app/app-class';

interface StoreGetterValue {
  value: any;
  onUpdated: (value: any) => any;
  __callback: any;
}
export interface StoreObject {
  state: any;
  getters: any;
  dispatch: (name: string, data: any) => Promise<any>;
  __removeCallback: (callback: any) => void;
}
export interface StoreParameters {
  state: object;
  actions?: object;
  getters?: object;
}

export interface createStore {
  (storeParameters: StoreParameters): StoreObject;
}

export namespace Store {
  interface AppMethods {
    /** Create new store */
    createStore: (storeParameters: StoreParameters) => StoreObject;
  }
  interface AppParams {
    /** Store */
    store?: StoreParameters | StoreObject;
  }
}
declare const StoreModule: Framework7Plugin;

export default StoreModule;