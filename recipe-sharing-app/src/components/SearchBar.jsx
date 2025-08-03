import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
};

export default SearchBar;
