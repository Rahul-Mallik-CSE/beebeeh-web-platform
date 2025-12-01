/** @format */

import OverviewTableSection from "@/components/OverviewComponents/OverviewTableSection";

export default function Home() {
  return (
    <div className="w-full py-4">
      <div className=" max-w-[2500px] rounded-2xl mx-auto space-y-4">
        {/* table section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <OverviewTableSection />
        </div>
      </div>
    </div>
  );
}
