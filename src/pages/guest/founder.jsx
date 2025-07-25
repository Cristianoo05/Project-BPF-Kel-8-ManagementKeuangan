import React from "react";

const FounderPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Tim Founder FinMate</h2>
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
        {founders.map((founder) => (
          <FounderCard key={founder.id} {...founder} />
        ))}
      </div>
    </div>
  );
};

export default FounderPage;
