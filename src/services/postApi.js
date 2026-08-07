import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  tagTypes: ["Posts", "Comments"],

  keepUnusedDataFor: 60,

  refetchOnFocus: true,

  refetchOnReconnect: true,

  endpoints: (builder) => ({

    // Get all posts
    getPosts: builder.query({
      query: () => "posts",

      providesTags: ["Posts"],
    }),

    // Get single post
    getPost: builder.query({
      query: (id) => `posts/${id}`,

      providesTags: (result, error, id) => [
        { type: "Posts", id },
      ],
    }),

    // Get comments
    getComments: builder.query({
      query: (id) => `posts/${id}/comments`,

      providesTags: (result, error, id) => [
        { type: "Comments", id },
      ],
    }),

    // Create Post
    createPost: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),

      invalidatesTags: ["Posts"],
    }),

    // Update Post
    updatePost: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body: data,
      }),

      invalidatesTags: (result, error, { id }) => [
        { type: "Posts", id },
        "Posts",
      ],
    }),

    // Delete Post
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetCommentsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;