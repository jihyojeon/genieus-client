import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { StringDecoder } from 'string_decoder'

interface SubscriptionType {
  id: string
  subscription_name: string
  description: string
  minutes: number
  active: boolean
}

export const subscriptionApi = createApi({
  reducerPath: 'subscriptionApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getSubscriptions: builder.query<SubscriptionType, void>({
      query: () => `/subscription`,
    }),
  }),
})

export const { useGetSubscriptionsQuery } = subscriptionApi
