import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// interface TutorType {
//   email: string
//   name: string
//   id: string
//   photo_url: string
//   spoken_language: string[]
//   location: string
//   joined_date: Date
//   bio: string
//   avg_rating: number
//   completed_help_requests: number
//   tags: string[]
//   programming_languages: string[]
// }

export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    
    addStudent: builder.mutation({
      query: (user) => ({
        url: '/student',
        method: 'POST',
        body: user,
      }),
    }),
  }),
})

export const { useAddStudentMutation } = studentApi
