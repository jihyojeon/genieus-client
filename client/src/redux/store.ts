import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { tutorApi } from './services/tutorService'
import { subscriptionApi } from './services/subscriptionService'
import { studentApi } from './services/studentService'
import { helpRequestApi } from './services/helpRequestService'

export const store = configureStore({
  reducer: {
    [tutorApi.reducerPath]: tutorApi.reducer,
    [subscriptionApi.reducerPath]: subscriptionApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [helpRequestApi.reducerPath]: helpRequestApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(tutorApi.middleware)
      .concat(subscriptionApi.middleware)
      .concat(studentApi.middleware)
      .concat(helpRequestApi.middleware),
})

setupListeners(store.dispatch)
