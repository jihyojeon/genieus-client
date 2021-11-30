import { configureStore } from '@reduxjs/toolkit'
// import tutorReducer from './features/tutorSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tutorApi } from './services/tutorService'

export const store = configureStore({
  reducer: {
    // tutor: tutorReducer,
    [tutorApi.reducerPath]: tutorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tutorApi.middleware),
})

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
