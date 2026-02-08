import { Link } from "react-router-dom";

export default function Navbar() {
  const isAuthenticated = false;

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <Link to="/" className="font-bold text-lg">
        SSA
      </Link>

      {isAuthenticated ? (
        <button className="rounded-full bg-gray-200 w-8 h-8">
          U
        </button>
      ) : (
        <Link to="/auth" className="text-sm">
          Login
        </Link>
      )}
    </nav>
  );
}
