/** @format */

import React from "react";

const TodaysJobsPage = () => {
  return (
    <div className="w-full py-4">
      <div className=" max-w-[2500px] rounded-2xl mx-auto space-y-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome to the Technician Dashboard
          </h2>
          <p className="mt-2 text-gray-600">
            This is the home page of the technician dashboard.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
          <p className="mt-2 text-gray-600">
            Here you can find an overview of your tasks and notifications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodaysJobsPage;
