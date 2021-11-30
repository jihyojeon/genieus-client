import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { StringDecoder } from 'string_decoder'

interface HRType {
  student_id: string
  description: string
  tags?: string[]
  language: string
  code: string
  favourites_only: boolean
}

export const HelpRequestApi = createApi({
  reducerPath: 'HelpRequestApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getHRRequests: builder.query<HRType, void>({
      query: () => `/helprequest`,
    }),
  }),
})

export const { useGetHRRequestsQuery } = HelpRequestApi
