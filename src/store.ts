import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './utils/cartSlice';
import favoriteReducer from './utils/favoriteSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
