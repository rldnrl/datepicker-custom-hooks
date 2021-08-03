import React, { useState } from 'react';
import CustomDatePicker from './components/DatePicker';
import useDatePicker from './hooks/useDatePicker';

const DATE_ID = {
  ONE_WEEK: 1,
  TWO_WEEK: 2,
  ONE_MONTH: 3,
  TWO_MONTH: 4,
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

  const { state: dateState, dispatch } = useDatePicker()
  const { startDate, endDate } = dateState

  const onButtonChange = (id: number) => {
    setCurrentButtonId(id)
    switch (id) {
      case ONE_WEEK:
        dispatch({ type: "ONE_WEEK" })
        break
      case TWO_WEEK:
        dispatch({ type: "TWO_WEEK" })
        break
      case ONE_MONTH:
        dispatch({ type: "ONE_MONTH" })
        break
      case TWO_MONTH:
        dispatch({ type: "TWO_MONTH" })
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
        onStartDateChange={(date: Date) => dispatch({ type: "CUSTOM_START_DATE", startDate: date })}
        onEndDateChange={(date: Date) => dispatch({ type: "CUSTOM_END_DATE", endDate: date })}
      />
    </div>
  );
}

export default App;
