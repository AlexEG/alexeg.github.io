import { useState } from "react";

function WakatimeLanguages() {
  const Last7Days = "8c5d6e4e-2c83-4a6d-9106-4ac8d1714190";
  const Last30Days = "f36b0d33-be7a-493a-aa24-e1aad03ec444";
  const LastYear = "f155aaeb-8225-4e92-a56c-4fca559f1ebd";
  const AllTime = "e5c768c1-1627-4f4e-9c31-8b9d6e07b9d0";

  const [timeRange, setTimeRange] = useState(Last7Days);

  function changeTimeRange() {
    let lTR = document.querySelector("#languagesTimeRange").value;

    setTimeRange(
      lTR === "Last 7 Days"
        ? Last7Days
        : lTR === "Last 30 Days"
        ? Last30Days
        : lTR === "Last Year"
        ? LastYear
        : AllTime
    );

    // console.log(timeRange);
    // console.log(lTR);
  }

  return (
    <div className=" relative">
      <select
        name="Month"
        id="languagesTimeRange"
        className=" absolute top-2 right-2 bg-transparent border border-pink-500 text-purple-100 rounded-md w-5 px-1"
        onChange={changeTimeRange}
      >
        <option
          value="Last 7 Days"
          selected
          className="text-pink-100 bg-purple-950"
        >
          Last 7 Days
        </option>
        <option value="Last 30 Days" className="text-pink-100 bg-purple-900">
          Last 30 Days
        </option>
        <option value="Last Year" className="text-pink-100 bg-purple-950">
          Last Year
        </option>
        <option value="All Time" className="text-pink-100 bg-purple-900">
          All Time
        </option>
      </select>

      <figure>
        <embed
          className="mt-1 rounded-lg"
          src={`https://wakatime.com/share/@AlexEG/${timeRange}.svg`}
        ></embed>
      </figure>
    </div>
  );
}

export default WakatimeLanguages;
