export enum DataStateEnum {
  LOADING,
  LOADER,
  ERROR,
}

export interface AppDataState<T> {
  dataState?: DataStateEnum; // DATA STATE
  data?: T; // DISPLAYS DATA
  errorMessage?: string;
}
