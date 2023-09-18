import { groq } from "next-sanity";

export const allPosts = groq`
    *[_type == "post"]{
        ...,
        author->,
        category->
    } | order(_createdAt desc)
`;

export const allCategories = groq`
    *[_type == "category"]{
        ...,
        "posts": *[_type == "post" && category->title == title] | order(_createdAt desc)
    } | order(_createdAt desc)
`;

export const postsLimited = (limit: number) => groq`
    *[_type == "post"]{
        ...,
        author->,
        category->
    } | order(_createdAt desc) [0...${limit}]
`;

export const postsByCategory = (category: string) => groq`
    *[_type == "post" && category->title == "${category}"]{
        ...,
        author->,
        category->
    } | order(_createdAt desc)
`;

export const postBySlug = (slug: string) => groq`
    *[_type == "post" && slug.current == "${slug}"][0]{
        ...,
        author->,
        category->
    }
`;
