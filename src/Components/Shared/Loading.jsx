"use client";

import { Spinner } from "@heroui/react";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-5">

        {/* Spinner */}
        <Spinner
          size="lg"
          color="primary"
          label="Loading..."
          classNames={{
            label: "text-gray-600 text-base mt-2",
          }}
        />

        {/* Optional Text */}
        <p className="text-sm text-gray-400 animate-pulse">
          Please wait...
        </p>

      </div>
    </div>
  );
};

export default Loading;