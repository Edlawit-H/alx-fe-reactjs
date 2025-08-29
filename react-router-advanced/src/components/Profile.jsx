import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div className="container">
      <h1>Profile</h1>
      <nav className="profile-nav">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
