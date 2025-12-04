/** @format */
import React from "react";
import { MapPin } from "lucide-react";

const ClientInfoSection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Client Information Section:
      </h3>
      <div className="space-y-4 text-sm">
        <div>
          <p className="text-gray-500">Client Name :</p>
          <p className="font-medium text-gray-800">John Doe</p>
        </div>
        <div>
          <p className="text-gray-500">Contact Number :</p>
          <p className="font-medium text-gray-800">+1 323 654 9384</p>
        </div>
        <div>
          <p className="text-gray-500">Address :</p>
          <p className="font-medium text-gray-800">
            24 New Street, Los Angeles
          </p>
        </div>
        <div>
          <p className="text-gray-500">Locality :</p>
          <p className="font-medium text-gray-800">Downtown</p>
        </div>
        <div>
          <p className="text-gray-500">Notes :</p>
          <p className="font-medium text-gray-800">
            Water pressure too low last visit
          </p>
        </div>
        <div>
          <p className="text-gray-500">Pin Location :</p>
          <button className="mt-2 flex items-center gap-2 px-4 py-2 border border-red-800 text-red-800 rounded-lg hover:bg-red-50 transition-colors">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Map</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientInfoSection;
