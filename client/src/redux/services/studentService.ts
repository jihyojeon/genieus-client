import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import TutorType from './tutorService'

export interface StudentType {
  email: string
  name: string
  id: string
  subscription_type: string //('basic', 'pro', 'max')
  lastpayment_date: Date
  photo_url: string
  spoken_language: string[]
  location: string
  joined_date: Date
  subscription_expiry: Date
  favourite_tutors: string[]
  blocked_tutors: string[]
  bio: string
  time_remaining: number
  createdAt: Date
  updatedAt: Date
}

export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  tagTypes: ['Student'],
  endpoints: (builder) => ({
    getAllStudents: builder.query<StudentType[], void>({
      query: () => `/student`,
      providesTags: ['Student'],
    }),

    getStudentById: builder.query<StudentType, string>({
      query: (id) => `/student/${id}`,
      providesTags: ['Student'],
    }),

    addStudent: builder.mutation({
      query: (student) => ({
        url: '/student',
        method: 'POST',
        body: student,
      }),
      invalidatesTags: ['Student'],
    }),

    updateStudentById: builder.mutation<
      StudentType,
      Partial<StudentType> & Pick<StudentType, 'id'>
    >({
      query: ({ id, ...student }) => ({
        url: `/student/${id}`,
        method: 'PATCH',
        body: student,
      }),
      invalidatesTags: ['Student'],
    }),

    deleteStudentById: builder.mutation<
      { success: boolean; id: string },
      string
    >({
      query: (id) => ({
        url: `/student/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Student'],
    }),

    addFavouriteTutor: builder.mutation<
      StudentType,
      { studentId: string; tutorId: string }
    >({
      query: ({ studentId, tutorId }) => ({
        url: `/student/${studentId}/favourite/push`,
        method: 'PUT',
        body: { tutor_id: tutorId },
      }),
      invalidatesTags: ['Student'],
    }),

    removeFavouriteTutor: builder.mutation<
      StudentType,
      { studentId: any; tutorId: any }
    >({
      query: ({ studentId, tutorId }) => ({
        url: `/student/${studentId}/favourite/remove`,
        method: 'PUT',
        body: { tutor_id: tutorId },
      }),
      invalidatesTags: ['Student'],
    }),

    replaceFavouriteTutors: builder.mutation<
      StudentType,
      { studentId: string; tutorId: string[] }
    >({
      query: ({ studentId, tutorId }) => ({
        url: `/student/${studentId}/favourite/replace`,
        method: 'PUT',
        body: { tutor_id: tutorId },
      }),
      invalidatesTags: ['Student'],
    }),

    getFavouriteTutorsById: builder.query<TutorType[], string>({
      query: (id) => `/student/${id}/favourite`,
      providesTags: ['Student'],
    }),

    addBlockedTutor: builder.mutation<
      StudentType,
      { studentId: string; tutorId: string }
    >({
      query: ({ studentId, tutorId }) => ({
        url: `/student/${studentId}/block/push`,
        method: 'PUT',
        body: { tutor_id: tutorId },
      }),
      invalidatesTags: ['Student'],
    }),

    removeBlockedTutor: builder.mutation<
      StudentType,
      { studentId: string; tutorId: string }
    >({
      query: ({ studentId, tutorId }) => ({
        url: `/student/${studentId}/block/remove`,
        method: 'PUT',
        body: { tutor_id: tutorId },
      }),
      invalidatesTags: ['Student'],
    }),

    replaceBlockedTutors: builder.mutation<
      StudentType,
      { studentId: string; tutorId: string[] }
    >({
      query: ({ studentId, tutorId }) => ({
        url: `/student/${studentId}/block/replace`,
        method: 'PUT',
        body: { tutor_id: tutorId },
      }),
      invalidatesTags: ['Student'],
    }),

    getBlockedTutorsById: builder.query<TutorType[], string>({
      query: (id) => `/student/${id}/block`,
      providesTags: ['Student'],
    }),
  }),
})

export const {
  useGetAllStudentsQuery,
  useGetStudentByIdQuery,
  useAddStudentMutation,
  useUpdateStudentByIdMutation,
  useDeleteStudentByIdMutation,
  useAddFavouriteTutorMutation,
  useRemoveFavouriteTutorMutation,
  useReplaceFavouriteTutorsMutation,
  useGetFavouriteTutorsByIdQuery,
  useAddBlockedTutorMutation,
  useRemoveBlockedTutorMutation,
  useReplaceBlockedTutorsMutation,
  useGetBlockedTutorsByIdQuery,
} = studentApi
