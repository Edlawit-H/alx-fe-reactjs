import axios from "axios";

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  try {
    let query = `q=${username}`;
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }
    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
