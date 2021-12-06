import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export default interface HRType {
  student_id: string
  description: string
  tags?: string[]
  language: string
  code: string
  favourites_only: boolean
  tutor: any
  interested_tutors: any
  time_opened: Date
}

export const helpRequestApi = createApi({
  reducerPath: 'helpRequestApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    // GET ALL
    getHRRequests: builder.query<HRType, void>({
      query: () => `/helprequest`,
    }),

    getHrRequestByValue: builder.query<
      HRType[],
      {
        student_id?: string
        tutor_id?: string
        language?: string
        status?: string
      }
    >({
      query: (arg) => {
        const { student_id, tutor_id, language, status } = arg
        return {
          url: `/helprequest`,
          params: { student_id, tutor_id, language, status },
        }
      },
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
      query: ({ id, ...hr }) => ({
        url: `/helprequest/${id}`,
        method: 'PATCH',
        body: hr,
      }),
    }),
    // GET PENDING HR'S
    getPendingHRById: builder.query<HRType[], string>({
      query: (tutorId) => `/helprequest/pending/${tutorId}`,
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
  useGetHrRequestByValueQuery,
} = helpRequestApi
