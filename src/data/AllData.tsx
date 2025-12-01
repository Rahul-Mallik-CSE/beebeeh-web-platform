/** @format */

import { Job,  TableColumn } from "@/types/AllTypes";

export const columns: TableColumn<Job>[] = [
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

export const jobsData: Job[] = [
  {
    id: "#CD1002",
    jobType: "Maintenance",
    clientName: "Zara Khan",
    contactNumber: "1235 021500 54 22",
    orderedByTime: "Dec 10, 2024: 10:30 am",
    status: "Pending",
  },
  {
    id: "#CD1002",
    jobType: "Repairing",
    clientName: "Zara Khan",
    contactNumber: "1235 021500 54 22",
    orderedByTime: "Dec 10, 2024: 10:30 am",
    status: "In Progress",
  },
  {
    id: "#CD1002",
    jobType: "Maintenance",
    clientName: "Zara Khan",
    contactNumber: "1235 021500 54 22",
    orderedByTime: "Dec 10, 2024: 10:30 am",
    status: "Complete",
  },
  {
    id: "#CD1002",
    jobType: "Maintenance",
    clientName: "Zara Khan",
    contactNumber: "1235 021500 54 22",
    orderedByTime: "Dec 10, 2024: 10:30 am",
    status: "Pending",
  },
  {
    id: "#CD1002",
    jobType: "Repairing",
    clientName: "Zara Khan",
    contactNumber: "1235 021500 54 22",
    orderedByTime: "Dec 10, 2024: 10:30 am",
    status: "In Progress",
  },
  {
    id: "#CD1002",
    jobType: "Maintenance",
    clientName: "Zara Khan",
    contactNumber: "1235 021500 54 22",
    orderedByTime: "Dec 10, 2024: 10:30 am",
    status: "Complete",
  },
  {
    id: "#CD1002",
    jobType: "Maintenance",
    clientName: "Zara Khan",
    contactNumber: "1235 021500 54 22",
    orderedByTime: "Dec 10, 2024: 10:30 am",
    status: "Complete",
  },
  {
    id: "#CD1002",
    jobType: "Repairing",
    clientName: "Zara Khan",
    contactNumber: "1235 021500 54 22",
    orderedByTime: "Dec 10, 2024: 10:30 am",
    status: "In Progress",
  },
  {
    id: "#CD1002",
    jobType: "Maintenance",
    clientName: "Zara Khan",
    contactNumber: "1235 021500 54 22",
    orderedByTime: "Dec 10, 2024: 10:30 am",
    status: "Pending",
  },
  {
    id: "#CD1002",
    jobType: "Repairing",
    clientName: "Zara Khan",
    contactNumber: "1235 021500 54 22",
    orderedByTime: "Dec 10, 2024: 10:30 am",
    status: "In Progress",
  },
];
