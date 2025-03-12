import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BASE_URL,

  // prepareHeaders: (headers) => {
  //   const access_token = getCookie("access_token");

  //   if (access_token && access_token !== "undefined") {
  //     headers.set("Authorization", `Bearer ${access_token}`);
  //   }

  //   return headers;
  // },
});

export const api = createApi({
  reducerPath: "api",

  baseQuery,

  endpoints: (builder) => ({
    match: builder.mutation({
      query: (credentials) => ({
        url: "/api/match",

        method: "POST",

        body: credentials,

        headers: { "Content-Type": "application/json" },
      }),

      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (err) {
          console.error("Register failed:", err);
        }
      },
    }),
    book: builder.mutation({
      query: (credentials) => ({
        url: "/api/book",

        method: "POST",

        body: credentials,

        headers: { "Content-Type": "application/json" },
      }),

      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (err) {
          console.error("Register failed:", err);
        }
      },
    }),
    newsletter: builder.mutation({
      query: (credentials) => ({
        url: "/api/newsletter",

        method: "POST",

        body: credentials,

        headers: { "Content-Type": "application/json" },
      }),

      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (err) {
          console.error("Request failed:", err);
        }
      },
    }),
  }),
});

export const { useMatchMutation, useBookMutation, useNewsletterMutation } = api;
