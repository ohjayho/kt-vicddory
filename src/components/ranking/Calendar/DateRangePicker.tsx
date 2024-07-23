'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '@/components/ranking/Calendar/Calendar.css';

type DateRangePickerProps = {
  onDateChange: (start: Date | null, end: Date | null) => void;
};

export default function DateRangePicker({
  onDateChange,
}: DateRangePickerProps) {
  const today = new Date();
  const thirtyDaysAgo = new Date(today);
  thirtyDaysAgo.setDate(today.getDate() - 30);

  const [startDate, setStartDate] = useState<Date | undefined>(thirtyDaysAgo);
  const [endDate, setEndDate] = useState<Date | undefined>(today);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start || undefined);
    setEndDate(end || undefined);
    onDateChange(start, end);
  };

  return (
    <DatePicker
      className="ml-3 w-60 h-8 text-sm text-center p-2 border border-gray-600 rounded-md bg-transparent text-white"
      selected={startDate}
      onChange={handleDateChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      shouldCloseOnSelect
      dateFormat="yyyy.MM.dd"
      minDate={thirtyDaysAgo}
      maxDate={today}
    />
  );
}
