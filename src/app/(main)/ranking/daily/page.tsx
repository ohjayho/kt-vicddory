'use client';

import DateRangePicker from '@/components/ranking/Calendar/DateRangePicker';
import dynamic from 'next/dynamic';
import { useState } from 'react';

export default function RankingDaily() {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (start: Date | null, end: Date | null) => {
    setStartDate(start || undefined);
    setEndDate(end || undefined);
  };

  const Chart = dynamic(() => import('@/components/ranking/Chart'), {
    ssr: false,
  });

  return (
    <>
      <div className="w-3/4 mx-auto text-white pb-16 no-scrollbar">
        <div className="h-8 mt-[51px] text-lg max-sm:text-base border-l-4 border-red-100 flex items-center max-sm:flex-col max-sm:items-start">
          <p className="ml-3.5 max-sm:mb-3">비교 분석 구간:</p>
          <DateRangePicker onDateChange={handleDateChange} />
        </div>
        <p className="my-4 ml-4 text-sm max-sm:my-12">
          * 기간 검색은 30일 이내
        </p>
        <div className="overflow-x-auto">
          <Chart
            title="일자별 순위 그래프"
            startDate={startDate}
            endDate={endDate}
            page="daily"
          />
        </div>
      </div>
    </>
  );
}
