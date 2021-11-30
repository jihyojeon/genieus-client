import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { tutorApi } from './services/tutorService'
import { subscriptionApi } from './services/subscriptionService'
import { studentApi } from './services/studentService'
import { HelpRequestApi } from './services/HelpRequestService'

export const store = configureStore({
  reducer: {
    [tutorApi.reducerPath]: tutorApi.reducer,
    [subscriptionApi.reducerPath]: subscriptionApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [HelpRequestApi.reducerPath]: HelpRequestApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(tutorApi.middleware)
      .concat(subscriptionApi.middleware)
      .concat(studentApi.middleware)
      .concat(HelpRequestApi.middleware),
})

setupListeners(store.dispatch)
