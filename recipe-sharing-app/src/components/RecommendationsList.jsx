import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) return <p>No recommendations available.</p>;

  return (
    <div className="p-4 border rounded-md bg-green-50 mt-6">
      <h2 className="text-xl font-semibold mb-4">Recommended For You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} className="mb-3">
          <h3 className="text-lg font-bold">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
