import React, { useState } from 'react';
import CustomDatePicker from './components/DatePicker';
import useDatePicker, { DateType } from './hooks/useDatePicker';

type DateID = {
  [K in DateType]: number
}

const DATE_ID: DateID = {
  ONE_WEEK: 1,
  TWO_WEEK: 2,
  ONE_MONTH: 3,
  TWO_MONTH: 4,
  CUSTOM_START_DATE: 5,
  CUSTOM_END_DATE: 6,
};

const { ONE_WEEK, TWO_WEEK, ONE_MONTH, TWO_MONTH } = DATE_ID

const Buttons = [
  { id: ONE_WEEK, text: '1주', className: "one-week" },
  { id: TWO_WEEK, text: '2주', className: "two-week" },
  { id: ONE_MONTH, text: '1개월', className: "two-week" },
  { id: TWO_MONTH, text: '2개월', className: "two-month" },
]

function App() {
  const [, setCurrentButtonId] = useState(0)

  const {
    state,
    getOneWeek,
    getTwoWeek,
    getOneMonth,
    getTwoMonth,
    getCustomStartDate,
    getCustomEndDate
  } = useDatePicker()
  const { startDate, endDate } = state

  const onButtonChange = (id: number) => {
    setCurrentButtonId(id)
    switch (id) {
      case ONE_WEEK:
        getOneWeek()
        break
      case TWO_WEEK:
        getTwoWeek()
        break
      case ONE_MONTH:
        getOneMonth()
        break
      case TWO_MONTH:
        getTwoMonth()
        break
      default:
        break
    }
  }

  return (
    <div className="App">
      {Buttons.map((ButtonItem) => (
        <button
          key={ButtonItem.id}
          className={ButtonItem.className}
          onClick={() => onButtonChange(ButtonItem.id)}
        >
          {ButtonItem.text}
        </button>
      ))}
      <CustomDatePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={(date: Date) => getCustomStartDate(date)}
        onEndDateChange={(date: Date) => getCustomEndDate(date)}
      />
    </div>
  );
}

export default App;
