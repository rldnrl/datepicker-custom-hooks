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
        startDate: subWeeks(new Date(), 1),
        endDate: new Date(),
      };

    case "TWO_WEEK":
      return {
        startDate: subWeeks(new Date(), 2),
        endDate: new Date(),
      };
    case "ONE_MONTH":
      return {
        startDate: subMonths(new Date(), 1),
        endDate: new Date(),
      };
    case "TWO_MONTH":
      return {
        startDate: subMonths(new Date(), 2),
        endDate: new Date(),
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

export type DateType = ActionType["type"];

const useDatePicker = () => {
  const [state, dispatch] = useReducer(reducer, {
    startDate: subDays(new Date(), 30),
    endDate: new Date(),
  });

  const getOneWeek = () => {
    dispatch({ type: "ONE_WEEK" });
  };

  const getTwoWeek = () => {
    dispatch({ type: "TWO_WEEK" });
  };

  const getOneMonth = () => {
    dispatch({ type: "ONE_MONTH" });
  };

  const getTwoMonth = () => {
    dispatch({ type: "TWO_MONTH" });
  };

  const getCustomStartDate = (date: Date) => {
    dispatch({ type: "CUSTOM_START_DATE", startDate: date });
  };

  const getCustomEndDate = (date: Date) => {
    dispatch({ type: "CUSTOM_END_DATE", endDate: date });
  };

  return {
    state,
    getOneWeek,
    getTwoWeek,
    getOneMonth,
    getTwoMonth,
    getCustomStartDate,
    getCustomEndDate,
  };
};

export default useDatePicker;
