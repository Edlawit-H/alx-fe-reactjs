import { useState } from "react";

// Simple fake auth hook
export default function useAuth() {
  const [isAuthenticated] = useState(false); // change to true to test login
  return { isAuthenticated };
}
