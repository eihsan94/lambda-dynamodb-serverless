import { Post } from "./post";

export interface Special {
    title: string, 
    description: string, 
    posts: Post[],
}
