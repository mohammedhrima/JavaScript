import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api"
  }),
  endpoints: (builder) => ({
    //sign up
    signup: builder.mutation({
      query: (user) => ({
        url: "/auth/signup",
        method: "POST",
        body: user
      })
    }),
    //login
    login: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user
      })
    }),
    //update user info
    updateUser: builder.mutation({
      query: (user) => ({
        url: "/users/update",
        method: "POST",
        body: user
      })
    }),
    //create International program
    createIP: builder.mutation({
      query: (ip) => ({
        url: "/ip/create",
        method: "POST",
        body: ip
      })
    }),
    //update International program
    updateIP: builder.mutation({
      query: (ip) => ({
        url: "/ip/update",
        method: "POST",
        body: ip
      })
    }),
    //delete International program
    delteIP: builder.mutation({
      query: (id) => ({
        url: `/ip/delete/${id}`,
        method: "DELETE"
      })
    }),
    //add International program
    addIP: builder.mutation({
      query: (data) => ({
        url: `/users/addip`,
        body: data,
        method: "POST"
      })
    }),
    //new test
    newtest: builder.mutation({
      query: (data) => ({
        url: "/tests/new-test",
        body: data,
        method: "POST"
      })
    })
  })
});

export const {
  useSignupMutation,
  useLoginMutation,
  useCreateIPMutation,
  useUpdateIPMutation,
  useDelteIPMutation,
  useAddIPMutation,
  useUpdateUserMutation,
  useNewtestMutation
} = appApi;
export default appApi;
