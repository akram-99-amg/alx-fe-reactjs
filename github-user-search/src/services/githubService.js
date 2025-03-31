import axios from "axios"

export const fetchUserData = async (query, location, miniRepos) => {
    try {
      let searchQuery = `q=${query}`;
      if (location) searchQuery += `+location:${location}`;
      if (miniRepos && !isNaN(miniRepos)) searchQuery += `+repos:>${miniRepos}`;
  
      const url = `https://api.github.com/search/users?${searchQuery}`;
      
  
      const res = await axios.get(url);
      
  
      return res.data.items;
    } catch (error) {
      
      throw new Error("User not found");
    }
  };