import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div className="container">
      <h2>Blog Post #{id}</h2>
      <p>This is dynamic routing in action!</p>
    </div>
  );
}
