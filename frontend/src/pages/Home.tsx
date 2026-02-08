import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        Smart Study Assistant
      </h1>
      <p className="text-gray-600 mb-6">
        Chat with your study material. Summarize. Quiz yourself. Learn smarter.
      </p>
      <Link
        to="/auth"
        className="px-6 py-3 bg-black text-white rounded"
      >
        Get Started
      </Link>
    </div>
  );
}
