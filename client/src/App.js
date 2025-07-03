import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import User from "./components/User";
import Post from "./components/Post";

const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "2rem",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "2rem",
  color: "#333"
};

const sectionStyle = {
  marginBottom: "2rem",
  padding: "1rem",
  backgroundColor: "#fff",
  borderRadius: "6px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
};

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={containerStyle}>
        <h1 style={headerStyle}>GraphQL Blog App</h1>

        <div style={sectionStyle}>
          <h2>User Info</h2>
          <User id="1" />
        </div>

        <div style={sectionStyle}>
          <h2>Post Details</h2>
          <Post id="103" />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
