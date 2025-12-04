/** @format */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const CustomerSignatureSection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Customer Signature Section:
      </h3>
      <div className="space-y-4 text-sm">
        <div>
          <p className="text-gray-500">Client Name :</p>
          <p className="font-medium text-gray-800">John Doe</p>
        </div>
        <div>
          <p className="text-gray-500">Signature time :</p>
          <p className="font-medium text-gray-800">04 Nov 2025, 2:30 PM</p>
        </div>
        <div>
          <p className="text-gray-500 mb-2">Signature Status :</p>
          <span className="inline-block px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-700">
            Complete
          </span>
        </div>
        <div className="pt-2">
          <Button className="w-full bg-[#5C3D2E] hover:bg-[#4A2F22] text-white">
            Collect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSignatureSection;
