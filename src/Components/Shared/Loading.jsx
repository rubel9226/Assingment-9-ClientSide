"use client";

import { Spinner } from "@heroui/react";

const Loading = () => {
  return (
    <div className="flex min-h-70vh items-center justify-center">
      <div className="flex flex-col items-center gap-5">

        {/* Spinner */}
        <Spinner
          size="xl"
          color="primary"
          label="Loading..."
          classNames={{
            label: "text-gray-400 text-base mt-2",
          }}
        />

        {/* Optional Text */}
        <p className="text-sm text-semibold text-cyan-500 animate-pulse">
          Please wait...
        </p>

      </div>
    </div>
  );
};

export default Loading;