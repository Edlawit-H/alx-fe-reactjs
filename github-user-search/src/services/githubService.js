const BASE_URL = "https://api.github.com/search/users";

const githubService = {
  searchUsers: async (query) => {
    const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error("GitHub API request failed");
    }
    return response.json();
  },
};

export default githubService;
