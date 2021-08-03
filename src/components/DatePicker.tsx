import React from "react";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import { subMonths } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css"

type CustomDatePickerProps = {
  readonly startDate: Date;
  readonly endDate: Date;
  readonly onStartDateChange: (date: Date) => void;
  readonly onEndDateChange: (date: Date) => void;
};

const CustomDatePicker = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: CustomDatePickerProps) => {
  return (
    <div className="date-picker-container">
      <DatePicker
        locale={ko}
        selected={startDate}
        dateFormat="yyyy-MM-dd"
        onChange={onStartDateChange}
        maxDate={endDate}
        minDate={subMonths(endDate, 3)}
      />
      <div>~</div>
      <DatePicker
        locale={ko}
        selected={endDate}
        dateFormat="yyyy-MM-dd"
        onChange={onEndDateChange}
        maxDate={new Date()}
        minDate={startDate}
      />
    </div>
  );
};

export default CustomDatePicker;
