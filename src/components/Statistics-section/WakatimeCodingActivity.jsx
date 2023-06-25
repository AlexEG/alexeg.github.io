import { useState } from "react";

function WakatimeCodingActivity() {
  const Last7Days = "0ce04439-b9b3-492e-85f0-af15cde7d901";
  const Last30Days = "8765dfb5-9a90-4133-a011-07b87e9b6ed8";
  const LastYear = "a29a39e5-baad-4ae5-84a5-8189c050ac73";
  const AllTime = "96b52650-2866-42cd-9ced-c922d8fdc7e8";

  const [codingActivityRange, setCodingActivityRange] = useState(Last7Days);

  function changeTimeRange() {
    let CATR = document.querySelector("#codingActivityTimeRange").value;

    setCodingActivityRange(
      CATR === "Last 7 Days"
        ? Last7Days
        : CATR === "Last 30 Days"
        ? Last30Days
        : CATR === "Last Year"
        ? LastYear
        : AllTime
    );
  }

  return (
    <div className="relative">
      <select
        id="codingActivityTimeRange"
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
          src={`https://wakatime.com/share/@AlexEG/${codingActivityRange}.svg`}
        ></embed>
      </figure>
    </div>
  );
}

export default WakatimeCodingActivity;
