import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './utils/cartSlice';
import favoriteReducer from './utils/favoriteSlice';
import productReducer from './utils/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
