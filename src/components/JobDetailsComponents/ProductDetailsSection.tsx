/** @format */
import React from "react";

const ProductDetailsSection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Product Details Section:
      </h3>
      <div className="space-y-4 text-sm">
        <div>
          <p className="text-gray-500">Product Model :</p>
          <p className="font-medium text-gray-800">AquaPure Pro 300</p>
        </div>
        <div>
          <p className="text-gray-500">Alam :</p>
          <p className="font-medium text-gray-800">AP-300</p>
        </div>
        <div>
          <p className="text-gray-500">Serial Number :</p>
          <p className="font-medium text-gray-800">SR-20249</p>
        </div>
        <div>
          <p className="text-gray-500">Installed Date :</p>
          <p className="font-medium text-gray-800">
            Not installed/New Installation
          </p>
        </div>
        <div>
          <p className="text-gray-500">Last Service Date :</p>
          <p className="font-medium text-gray-800">NA/First Visit</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
