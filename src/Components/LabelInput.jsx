import { useState } from "react";
import { useForm } from "react-hook-form";
import { AgeDisplayResults } from "./DisplayResults";
import { dayObject, monthObject, yearObject } from "./Errors";
import calcAge from "../AgeCalculatorFunction";

export default function LabelInput() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const [yearsResult, setYearsResult] = useState("--");
  const [monthsResult, setMonthsResult] = useState("--");
  const [daysResult, setDaysResult] = useState("--");

  const onSubmitFunction = handleSubmit((data) => {
    const { dayResult, monthResult, yearResult } = data;

    const days = calcAge(monthResult, dayResult, yearResult);
    // alert(days);
    setDaysResult(days[0]);
    setMonthsResult(days[1]);
    setYearsResult(days[2]);
  });

  return (
    <>
      <form onSubmit={onSubmitFunction}>
        <label>
          day
          <input
            {...register("dayResult", { ...dayObject })}
            placeholder="DD"
          />
          <small>{errors.dayResult?.message}</small>
        </label>

        <label>
          month
          <input
            {...register("monthResult", { ...monthObject })}
            placeholder="MM"
          />
          <small>{errors.monthResult?.message}</small>
        </label>

        <label>
          year
          <input
            {...register("yearResult", { ...yearObject })}
            placeholder="YYYY"
          />
          <small>{errors.yearResult?.message}</small>
        </label>
        <div className="submit-block">
          <hr />
          <input type="submit" value="" />
        </div>
      </form>

      <AgeDisplayResults
        days={daysResult}
        months={monthsResult}
        years={yearsResult}
      />
    </>
  );
}
