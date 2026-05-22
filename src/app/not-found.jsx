import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-red-500">
        404
      </h1>

      <p className="mt-3 text-gray-600">
        Route Not Found
      </p>

      <Link
        href="/"
        className="mt-5 px-5 py-2 bg-black text-white rounded"
      >
        Back To Home
      </Link>
    </div>
  );
}