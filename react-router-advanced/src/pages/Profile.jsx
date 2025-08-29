import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="container">
      <h1>Profile</h1>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}
