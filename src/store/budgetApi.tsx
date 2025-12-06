import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const budgetApi = createApi({
  reducerPath: "budgetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "https://localhost:7255/api/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getIncome: builder.query({ query: () => "IncomeSource" }),
    createIncome: builder.mutation({
      query: (body) => ({ url: "IncomeSource/Create", method: "POST", body }),
    }),
    getExpenses: builder.query({ query: () => "Expenses" }),
    // add more endpoints as needed
  }),
});

export const {
  useGetIncomeQuery,
  useCreateIncomeMutation,
  useGetExpensesQuery,
} = budgetApi;
