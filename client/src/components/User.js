import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
    query GetUser($id: ID!) {
        user(id: $id) {
            name
            posts {
                id
                title
            }
        }
    }
`;

function User({ id }) {
    const { data, loading, error } = useQuery(GET_USER, { variables: { id } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading user</p>;

    return (
        <div>
        <h3>{data.user.name}'s Posts</h3>
        <ul>
            {data.user.posts.map(post => (
            <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        </div>
    );
}

export default User;
