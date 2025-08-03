import { useState } from "react";
import githubService from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const query = `${username} ${location && `location:${location}`} ${
        minRepos && `repos:>=${minRepos}`
      }`.trim();

      const response = await githubService.searchUsers(query);
      setResults(response.items);
    } catch (err) {
      setError("Failed to fetch users");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4 p-4 bg-white rounded shadow-md">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {results.length > 0 && (
        <div className="mt-6 space-y-4">
          {results.map((user) => (
            <div key={user.id} className="flex items-center gap-4 p-4 border rounded shadow">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-600 font-semibold">
                  {user.login}
                </a>
                {/* Optional: show more info like location, repos using user API */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
