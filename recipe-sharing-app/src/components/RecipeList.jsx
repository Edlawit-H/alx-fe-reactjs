import React from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="mb-4 p-4 border rounded-md">
          <h3 className="text-lg font-bold">{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button
            onClick={() => toggleFavorite(recipe.id)}
            className={`mt-2 px-3 py-1 rounded ${
              favorites.includes(recipe.id) ? 'bg-red-500 text-white' : 'bg-gray-300'
            }`}
          >
            {favorites.includes(recipe.id) ? 'Remove Favorite' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
