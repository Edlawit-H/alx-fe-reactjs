// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set(state => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      };
    }),

  deleteRecipe: (id) =>
    set(state => {
      const updated = state.recipes.filter(r => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
        favorites: state.favorites.filter(favId => favId !== id),
        recommendations: state.recommendations.filter(r => r.id !== id)
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set(state => {
      const updated = state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      };
    }),

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    })),

  addFavorite: (id) =>
    set(state => ({
      favorites: state.favorites.includes(id)
        ? state.favorites
        : [...state.favorites, id]
    })),

  removeFavorite: (id) =>
    set(state => ({
      favorites: state.favorites.filter(favId => favId !== id)
    })),

  generateRecommendations: () =>
    set(state => {
      const recommended = state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
