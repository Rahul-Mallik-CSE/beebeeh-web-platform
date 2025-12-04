/** @format */
"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import HeaderSummaryCard from "./HeaderSummaryCard";
import FrequentlyUsedParts from "./FrequentlyUsedParts";
import ChecklistSection from "./ChecklistSection";
import ImageUploadSection from "./ImageUploadSection";
import ClientInfoSection from "./ClientInfoSection";
import ProductDetailsSection from "./ProductDetailsSection";
import CustomerSignatureSection from "./CustomerSignatureSection";

interface JobDetailsPageProps {
  jobId: string;
}

const JobDetailsPage = ({ jobId }: JobDetailsPageProps) => {
  const router = useRouter();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg font-medium">Job Details</span>
        </button>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium px-6">
          Pending
        </Button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - 2/3 */}
        <div className="lg:col-span-1 space-y-6">
          <HeaderSummaryCard jobId={jobId} />
          <ClientInfoSection />
          <ProductDetailsSection />
        </div>
        {/* Right Column - 1/3 */}
        <div className="lg:col-span-2 space-y-6">
          <FrequentlyUsedParts />
          <ChecklistSection />
          <ImageUploadSection />
          <CustomerSignatureSection />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 pt-6">
        <Button
          variant="outline"
          className="px-8 py-6 text-red-800 border-red-800 hover:bg-red-50"
        >
          Cancel Job
        </Button>
        <Button className="px-8 py-6 bg-red-800 hover:bg-red-700 text-white">
          Start Job
        </Button>
      </div>
    </div>
  );
};

export default JobDetailsPage;
