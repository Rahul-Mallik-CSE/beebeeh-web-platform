/** @format */
"use client";
import React from "react";
import CustomTable from "../CommonComponents/CustomTable";
import { jobsData } from "@/data/AllData";
import { Job, TableColumn } from "@/types/AllTypes";

const TodaysJobsTableSection = () => {
  const columns: TableColumn<Job>[] = [
    {
      header: "Job ID",
      accessor: "id",
      className: "font-medium",
    },
    {
      header: "Job Type",
      accessor: "jobType",
    },
    {
      header: "Client Name",
      accessor: "clientName",
    },
    {
      header: "Contact Number",
      accessor: "contactNumber",
    },
    {
      header: "Ordered by time",
      accessor: "orderedByTime",
    },
    {
      header: "Status",
      accessor: "status",
    },
  ];

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
