import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../models';
import { API_URL } from '../../constants';

export const authApi = createApi({
  reducerPath: 'auth/api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (payload: IUser) => ({
        url: `auth/signin`,
        method: 'POST',
        body: payload,
      }),
    }),

    registerUser: build.mutation({
      query: (payload: IUser) => ({
        url: `auth/signup`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
