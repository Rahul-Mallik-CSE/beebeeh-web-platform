/** @format */
"use client";
import CustomTable from "../CommonComponents/CustomTable";
import { columns, jobsData } from "@/data/AllData";
import type { Job } from "@/types/AllTypes";

const AllJobsTableSection = () => {
  const handleAction = (job: Job) => {
    console.log("View job details:", job);
    // Add your action logic here (e.g., navigate to details page)
  };

  return (
    <CustomTable
      data={jobsData}
      columns={columns}
      onAction={handleAction}
      title="All Jobs"
      additionalCount={5}
    />
  );
};

export default AllJobsTableSection;
