import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    //sign up
    signup: builder.mutation({
      query: (user) => ({
        url: "/users/signup",
        method: "POST",
        body: user,
      }),
    }),
    //login
    login: builder.mutation({
      query: (user) => ({
        url: "/users/login",
        method: "POST",
        body: user,
      }),
    }),
    //update user
    updateUser: builder.mutation({
      query: ({ course, id }) => ({
        url: "/users/updateusercourse",
        method: "PATCH",
        body: {
          course: course,
          userid: id,
        },
      }),
    }),
    //create Course
    createCourse: builder.mutation({
      query: (course) => ({
        url: "/courses/create",
        method: "POST",
        body: course,
      }),
    }),
    //update course
    updateCourse: builder.mutation({
      query: (obj) => ({
        url: "/courses/updatecourse",
        method: "POST",
        body: obj,
      }),
    }),
    //Idiom
    createIdiom: builder.mutation({
      query: (newIdiom) => ({
        url: "/idioms/create",
        method: "POST",
        body: newIdiom,
      }),
    }),
    //delete idiom
    deleteIdiom: builder.mutation({
      query: (id) => ({
        url: `/idioms/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useUpdateUserMutation,
  useCreateCourseMutation,
  useCreateIdiomMutation,
  useDeleteIdiomMutation,
  useUpdateCourseMutation,
} = appApi;
export default appApi;
