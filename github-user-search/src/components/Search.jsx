import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px", color: "navy" }}>
        Welcome to GitHub User Search!
      </h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            flexGrow: 1,
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "4px 0 0 4px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "0 4px 4px 0",
            backgroundColor: "navy",
            color: "white",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#001f4d")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "navy")}
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div style={{ textAlign: "center" }}>
          <img
            src={userData.avatar_url}
            alt={`${userData.login} avatar`}
            width={120}
            height={120}
            style={{ borderRadius: "50%", marginBottom: "15px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
          />
          <h2 style={{ margin: "0 0 10px" }}>{userData.name || userData.login}</h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "navy", textDecoration: "none", fontWeight: "bold" }}
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
