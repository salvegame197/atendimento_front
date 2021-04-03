import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'ATEND_FRONT',
      storage,
      whitelist: ['login'],
    },
    reducers
  );
  return persistedReducers;
};
