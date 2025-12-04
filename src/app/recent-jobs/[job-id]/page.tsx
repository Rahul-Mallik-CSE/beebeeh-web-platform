/** @format */

import React from "react";
import JobDetailsPage from "@/components/JobDetailsComponents/JobDetailsPage";

interface PageProps {
  params: {
    "job-id": string;
  };
}

const JobDetailsOverviewPage = ({ params }: PageProps) => {
  const jobId = params["job-id"];

  return (
    <div className="w-full py-4">
      <div className="max-w-[2500px] mx-auto">
        <JobDetailsPage jobId={jobId} />
      </div>
    </div>
  );
};

export default JobDetailsOverviewPage;
