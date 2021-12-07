import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export default interface HRType {
  id: string
  rating: number
  student_id: string
  description: string
  tags?: string[]
  interested_tutors: string[]
  declined_tutors: string[]
  language: string
  code: string
  favourites_only: boolean
  status: any
  tutor_id: string
  time_opened: Date
  time_accepted: Date
  time_closed: Date
  feedback_comments: string
  zoom_url: string
  student: { id: string; name: string; photo_url: string }
  tutor: { id: string; name: string; photo_url: string }
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
