import { db } from "./db.js";

export const resolvers = {
    Query: {
        post: (_, { id }) => db.posts.find(p => p.id === id),
        user: (_, { id }) => db.users.find(u => u.id === id)
    },
    Post: {
        author: (post) => db.users.find(u => u.id === post.authorId)
    },
    User: {
        posts: (user) => db.posts.filter(p => p.authorId === user.id)
    }
};
