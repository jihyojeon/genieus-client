import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export default interface TutorType {
  email: string
  name: string
  id: string
  photo_url?: string
  spoken_language?: string[]
  location?: string
  joined_date: Date
  bio: string
  avg_rating: number | undefined
  completed_help_requests: number
  time_completed: number
  tags: string[]
  programming_languages: string[]
}

export const tutorApi = createApi({
  reducerPath: 'tutorApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  tagTypes: ['Tutor'],
  endpoints: (builder) => ({
    getTutorById: builder.query<TutorType, string>({
      query: (id) => `/tutor/${id}`,
      providesTags: ['Tutor'],
    }),

    getAllTutors: builder.query<TutorType[], void>({
      query: () => `/tutor`,
      providesTags: ['Tutor'],
    }),

    addTutor: builder.mutation<TutorType, any>({
      query: (user) => ({
        url: '/tutor',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Tutor'],
    }),

    updateTutor: builder.mutation<
      TutorType,
      Partial<TutorType> & Pick<TutorType, 'id'>
    >({
      query: ({ id, ...user }) => ({
        url: `/tutor/${id}`,
        method: 'PATCH',
        body: user,
      }),
      invalidatesTags: ['Tutor'],
    }),

    deleteTutor: builder.mutation<TutorType, any>({
      query: (id) => ({
        url: `/tutor/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tutor'],
    }),
  }),
})

export const {
  useGetTutorByIdQuery,
  useGetAllTutorsQuery,
  useAddTutorMutation,
  useDeleteTutorMutation,
  useUpdateTutorMutation,
} = tutorApi
