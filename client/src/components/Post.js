import { gql, useQuery } from "@apollo/client";

const GET_POST = gql`
    query GetPost($id: ID!) {
        post(id: $id) {
            title
            author {
                name
            }
        }
    }
`;

function Post({ id }) {
    const { data, loading, error } = useQuery(GET_POST, { variables: { id } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading post</p>;

    return (
        <div>
        <h3>{data.post.title}</h3>
        <p>Author: {data.post.author.name}</p>
        </div>
    );
}

export default Post;
