import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { tutorApi } from './services/tutorService'
import { subscriptionApi } from './services/subscriptionService'
import { studentApi } from './services/studentService'

export const store = configureStore({
  reducer: {
    [tutorApi.reducerPath]: tutorApi.reducer,
    [subscriptionApi.reducerPath]: subscriptionApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tutorApi.middleware),
})

setupListeners(store.dispatch)
