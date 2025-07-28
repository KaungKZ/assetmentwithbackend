import { format, startOfDay } from 'date-fns';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { BiCalendar } from 'react-icons/bi';

const CustomDatePicker = ({ label, name, setFieldValue, action }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const today = startOfDay(new Date());

  const onChangeHandler = (date) => {
    setSelectedDate(date);

    action && action(date);

    const formattedDate = format(date, 'yyyy-MM-dd');

    setFieldValue(name, formattedDate);
    setFieldValue('slot', '');
  };

  return (
    <div className="relative">
      {label && (
        <label className="block mb-1 text-sm text-gray-500">{label}</label>
      )}

      <BiCalendar className="absolute bottom-[18px] right-3" />

      <DatePicker
        selected={selectedDate}
        onChange={onChangeHandler}
        dateFormat="dd MMMM yyyy"
        minDate={today}
        className="text-sm py-3.5 cursor-default w-full bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-400"
      />
    </div>
  );
};

export default CustomDatePicker;
