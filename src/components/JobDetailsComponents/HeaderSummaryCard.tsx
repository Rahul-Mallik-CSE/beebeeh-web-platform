/** @format */
import React from "react";

interface HeaderSummaryCardProps {
  jobId: string;
}

const HeaderSummaryCard = ({ jobId }: HeaderSummaryCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Header Summary card:
      </h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Job ID :</p>
          <p className="font-medium text-gray-800">{jobId}</p>
        </div>
        <div>
          <p className="text-gray-500">Job Type :</p>
          <p className="font-medium text-gray-800">Installation</p>
        </div>
        <div>
          <p className="text-gray-500">Product Model :</p>
          <p className="font-medium text-gray-800">AquaPure Pro 300</p>
        </div>
        <div>
          <p className="text-gray-500">Serial Number :</p>
          <p className="font-medium text-gray-800">SR-20249</p>
        </div>
        <div>
          <p className="text-gray-500">Client Name :</p>
          <p className="font-medium text-gray-800">John Doe</p>
        </div>
        <div>
          <p className="text-gray-500">Client Location :</p>
          <p className="font-medium text-gray-800">24 New Street, LA</p>
        </div>
        <div>
          <p className="text-gray-500">Scheduled Date :</p>
          <p className="font-medium text-gray-800">04 Nov 2025, 2:30 PM</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSummaryCard;
