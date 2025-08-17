import { Link } from "react-router-dom";

// inside the map function for recipes
<Link to={`/recipe/${recipe.id}`}>
  <div
    key={recipe.id}
    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
  >
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
      <p className="text-gray-600">{recipe.summary}</p>
    </div>
  </div>
</Link>
