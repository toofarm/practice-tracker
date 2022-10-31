import { Action, configureStore, Middleware } from "@reduxjs/toolkit";
import rootReducer from "./modules";
import { asyncFunctionMiddleware } from "./middleware";

const store: any = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
    }).prepend(
      asyncFunctionMiddleware as Middleware<
        (action: Action<"specialAction">) => number,
        RootState
      >
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
