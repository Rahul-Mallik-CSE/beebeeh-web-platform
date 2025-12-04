/** @format */
"use client";
import React from "react";
import CustomTable from "../CommonComponents/CustomTable";
import { columns, jobsData } from "@/data/AllData";
import type { Job } from "@/types/AllTypes";
import { useRouter } from "next/navigation";

const OverviewTableSection = () => {
  const router = useRouter();

  const handleAction = (job: Job) => {
    // Remove # from job ID for URL
    const jobId = job.id.replace("#", "");
    router.push(`/recent-jobs/${jobId}`);
  };

  return (
    <CustomTable
      data={jobsData}
      columns={columns}
      onAction={handleAction}
      title="Recent Jobs"
      additionalCount={5}
    />
  );
};

export default OverviewTableSection;
