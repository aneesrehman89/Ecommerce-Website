import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | ambotique",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}