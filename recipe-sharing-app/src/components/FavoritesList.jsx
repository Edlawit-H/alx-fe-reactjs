import React from 'react';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean)
  );

  if (favorites.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div className="p-4 border rounded-md bg-yellow-50">
      <h2 className="text-xl font-semibold mb-4">My Favorite Recipes</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id} className="mb-3">
          <h3 className="text-lg font-bold">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
