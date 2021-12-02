import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface HRType {
  student_id: string
  description: string
  tags?: string[]
  language: string
  code: string
  favourites_only: boolean
}



export const helpRequestApi = createApi({
  reducerPath: 'helpRequestApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    // GET ALL
    getHRRequests: builder.query<HRType, void>({
      query: () => `/helprequest`,
    }),
    getHrRequestByValue: builder.query<HRType, any>({
      query: (body) =>
        `/helprequest?parameter=${body.tutor.id | body.student.id}`,
    }),
    // GET BY ID
    getHRRequestById: builder.query<HRType, string>({
      query: (id) => `/helprequest/${id}`,
    }),
    // ADD HR
    addHRRequest: builder.mutation<HRType, any>({
      query: (request) => ({
        url: `/helprequest`,
        method: 'POST',
        body: request,
      }),
    }),
    // DELETE HR
    deleteHRRequest: builder.mutation<HRType, any>({
      query: (id) => ({
        url: `/helprequest/${id}`,
        method: 'DELETE',
      }),
    }),
    // UPDATE HR

    updateHRRequest: builder.mutation<HRType, any>({
      query: (user) => ({
        url: `/helprequest/${user.id}`,
        method: 'PATH',
        body: user,
      }),
    }),
    // GET PENDING HR'S
    getPendingHRById: builder.query<HRType, any>({
      query: (body) => `/helprequest/pending/${body.tutor.id}`,
    }),
  }),
})

export const {
  useGetHRRequestsQuery,
  useGetHRRequestByIdQuery,
  useAddHRRequestMutation,
  useDeleteHRRequestMutation,
  useUpdateHRRequestMutation,
  useGetPendingHRByIdQuery,
  useGetHrRequestByValueQuery

} = helpRequestApi