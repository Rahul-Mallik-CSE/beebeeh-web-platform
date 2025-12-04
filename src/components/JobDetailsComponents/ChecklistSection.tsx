/** @format */
"use client";
import React, { useState } from "react";
import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ChecklistSection = () => {
  const [checklist, setChecklist] = useState([
    {
      id: 1,
      step: "Check water inlet",
      partCode: "",
      status: "Done",
      action: true,
    },
    {
      id: 2,
      step: "Install main filter",
      partCode: "",
      status: "Doing",
      action: false,
    },
    {
      id: 3,
      step: "Install sediment filter",
      partCode: "",
      status: "Cancel",
      action: false,
    },
    {
      id: 4,
      step: "",
      partCode: "Clean area",
      status: "Pending",
      action: false,
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "done":
        return "bg-green-100 text-green-700";
      case "doing":
        return "bg-cyan-100 text-cyan-700";
      case "cancel":
        return "bg-gray-100 text-gray-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Checklist Section:
      </h3>
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F1F4F9] hover:bg-[#F1F4F9]">
              <TableHead className="font-semibold text-gray-700">
                Step
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Part Code
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Status
              </TableHead>
              <TableHead className="font-semibold text-gray-700 text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {checklist.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="text-gray-700">{item.step}</TableCell>
                <TableCell className="text-gray-700">{item.partCode}</TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-md text-sm font-medium ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center gap-2">
                    <button className="w-6 h-6 rounded flex items-center justify-center bg-green-500 hover:bg-green-600 text-white">
                      <Check className="w-4 h-4" />
                    </button>
                    <button className="w-6 h-6 rounded flex items-center justify-center bg-red-500 hover:bg-red-600 text-white">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ChecklistSection;
