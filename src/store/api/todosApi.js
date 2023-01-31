import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_TODOAPI_URL;

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),
    getTodoById: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
