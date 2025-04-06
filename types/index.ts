import { ID } from "graphql-request/alpha/schema/scalars";

export interface ChildProps {
    children: React.ReactNode;
}
export interface IArchivedBlogs {
    year: string;
    blogs: IBlog[];
}
export interface IBlog {
    title: string;
    description: string;
    author: IAuthor;
    category: ICategoryAndTags;
    tag: ICategoryAndTags;
    image: { url: string };
    createdAt: string;
    content: { html: string };
    slug: string;
  
}
export interface IAuthor {
    name: string;
    image: {
        url: string;
    };
    bio: string;
    blogs: IBlog[];
    id: ID;
}

export interface ICategoryAndTags {
    name: string;
    slug: string;
}
