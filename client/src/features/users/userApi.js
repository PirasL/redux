import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  initialState: { user: null, token: null },
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userInfo) => ({
        url: "/user/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    getUserData: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }),
      transformResponse: (res) => ({
        email: res.body.email,
        firstName: res.body.firstName,
        lastName: res.body.lastName,
        id: res.body.id,
        userName: res.body.userName,
        isAuth: true,
      }),
      providesTags: ["User"],
    }),
    editUserData: builder.mutation({
      query: (userData) => ({
        url: `/user/profile`,
        method: "PUT",
        body: {
          userName: userData,
        },
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserDataQuery,
  useEditUserDataMutation,
  useLoginUserMutation,
} = userApi;
