"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-red-500">
        Something went wrong!
      </h2>

      <p className="mt-3 text-gray-600">
        {error?.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-5 px-5 py-2 bg-black text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}