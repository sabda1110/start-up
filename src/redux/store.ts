import { configureStore } from '@reduxjs/toolkit';
import profileUserReducer from './slices/profileUserCart';

const store = configureStore({
  reducer: {
    profileUser: profileUserReducer
  }
});

console.log('Init', store.getState());

store.subscribe(() => console.log('Update', store.getState()));

export default store;
