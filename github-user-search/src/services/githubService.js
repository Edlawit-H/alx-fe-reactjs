const BASE_URL = 'https://api.github.com/search/users';

export const searchUsers = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) {
    query += `${username} in:login`;
  }

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const url = `${BASE_URL}?q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
