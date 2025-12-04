/** @format */
"use client";
import React, { useState } from "react";
import { Upload, Settings } from "lucide-react";
import Image from "next/image";

const ImageUploadSection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Image Upload Section:
      </h3>
      <div className="grid grid-cols-2 gap-6">
        {/* Before Image */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700">Before Image</p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">
              Drag your files(s) or browse
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Max 10 MB files are allowed
            </p>
          </div>
          <p className="text-xs text-gray-500">
            Only support .jpg and .png files
          </p>
          <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="preview"
                width={48}
                height={48}
                className="rounded"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">
                Installation_prtral.jpg
              </p>
            </div>
            <Settings className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* After Image */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700">After Image</p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">
              Drag your files(s) or browse
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Max 10 MB files are allowed
            </p>
          </div>
          <p className="text-xs text-gray-500">
            Only support .jpg and .png files
          </p>
          <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="preview"
                width={48}
                height={48}
                className="rounded"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">
                Installation_prtral.jpg
              </p>
            </div>
            <Settings className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadSection;
