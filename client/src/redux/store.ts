import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { tutorApi } from './services/tutorService'

export const store = configureStore({
  reducer: {
    [tutorApi.reducerPath]: tutorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tutorApi.middleware),
})

setupListeners(store.dispatch)
