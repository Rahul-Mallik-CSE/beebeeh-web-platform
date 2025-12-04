/** @format */
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FrequentlyUsedParts = () => {
  const parts = [
    { step: "O-Ring", partCode: "CF-001", stock: "High", stockRequired: 1 },
    {
      step: "Sediment filter",
      partCode: "CF-050",
      stock: "High",
      stockRequired: 3,
    },
    { step: "O-Ring", partCode: "CF-001", stock: "Medium", stockRequired: 1 },
    { step: "O-Ring", partCode: "CF-001", stock: "Low", stockRequired: 1 },
  ];

  const getStockColor = (stock: string) => {
    switch (stock.toLowerCase()) {
      case "high":
        return "text-green-600";
      case "medium":
        return "text-orange-600";
      case "low":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Frequently Used Parts:
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
                Stock
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Stock Required
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {parts.map((part, index) => (
              <TableRow key={index}>
                <TableCell className="text-gray-700">{part.step}</TableCell>
                <TableCell className="text-gray-700">{part.partCode}</TableCell>
                <TableCell className={getStockColor(part.stock)}>
                  {part.stock}
                </TableCell>
                <TableCell className="text-gray-700">
                  {part.stockRequired}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FrequentlyUsedParts;
