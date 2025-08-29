import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

export default function PostsComponent() {
  const [refetchIndex, setRefetchIndex] = useState(0); // to trigger manual refetch
  const { data, isLoading, error, refetch } = useQuery(["posts", refetchIndex], fetchPosts, {
    staleTime: 60000, // cache data for 60 seconds
    cacheTime: 300000, // keep cache for 5 minutes
  });

  if (isLoading) return <p className="text-gray-600">Loading posts...</p>;
  if (error) return <p className="text-red-500">Error fetching posts</p>;

  return (
    <div>
      <button
        onClick={() => { setRefetchIndex((prev) => prev + 1); refetch(); }}
        className="mb-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
      >
        Refetch Posts
      </button>

      <ul className="space-y-4">
        {data.map((post) => (
          <li key={post.id} className="p-4 bg-white rounded-md shadow">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
