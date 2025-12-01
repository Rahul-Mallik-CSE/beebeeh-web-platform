/** @format */
"use client";
import React from "react";
import CustomTable from "../CommonComponents/CustomTable";
import { columns, jobsData } from "@/data/AllData";
import { Job } from "@/types/AllTypes";

const TodaysJobsTableSection = () => {
  const handleAction = (job: Job) => {
    console.log("View job details:", job);
    // Add your action logic here (e.g., navigate to details page)
  };

  return (
    <CustomTable
      data={jobsData}
      columns={columns}
      onAction={handleAction}
      title="Today's Job"
      additionalCount={5}
    />
  );
};

export default TodaysJobsTableSection;
