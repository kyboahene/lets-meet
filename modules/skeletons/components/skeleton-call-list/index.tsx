import React from "react";
import SkeletonCard from "../skeleton-card";

const SkeletonCallList = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((i, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonCallList;
