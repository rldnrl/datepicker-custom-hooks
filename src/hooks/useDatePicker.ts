import { useReducer } from "react";
import { subDays, subMonths, subWeeks } from "date-fns";

interface DateState {
  startDate: Date;
  endDate: Date;
}

type ActionType =
  | { type: "ONE_WEEK" }
  | { type: "TWO_WEEK" }
  | { type: "ONE_MONTH" }
  | { type: "TWO_MONTH" }
  | { type: "CUSTOM_START_DATE"; startDate: Date }
  | { type: "CUSTOM_END_DATE"; endDate: Date };

const reducer = (state: DateState, action: ActionType): DateState => {
  switch (action.type) {
    case "ONE_WEEK":
      return {
        ...state,
        startDate: subWeeks(new Date(), 1),
      };

    case "TWO_WEEK":
      return {
        ...state,
        startDate: subWeeks(new Date(), 2),
      };
    case "ONE_MONTH":
      return {
        ...state,
        startDate: subMonths(new Date(), 1),
      };
    case "TWO_MONTH":
      return {
        ...state,
        startDate: subMonths(new Date(), 2),
      };
    case "CUSTOM_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "CUSTOM_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

const useDatePicker = () => {
  const [state, dispatch] = useReducer(reducer, {
    startDate: subDays(new Date(), 30),
    endDate: new Date(),
  });

  return { state, dispatch };
};

export default useDatePicker;
