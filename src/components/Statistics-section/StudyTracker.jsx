import { useState } from "react";

function StudyTracker() {
  const june =
    "2PACX-1vTnFjpOWd2mEd28vLmu0WGcLlO3HtFQL-30mUEt3qSOPdKu2T7jJvf0jRSnzZPKAe6Epv8hcH8uZ4aZ/pubchart?oid=1414259734&amp;format=interactive";
  const july =
    "2PACX-1vR8zCkIeII2OTIGnG549kye_HoGVKjxFZhmWt3IQbq71Lh0mbTaviXMuMuBZi3anBqTApbyvEc_vhKY/pubchart?oid=1476637195&amp;format=interactive";
  const august =
    "2PACX-1vQgYWvVsgjAUCJgfWjluI8BftuJxOtEo7TgMusK5lxOAGzDpBD5SBFIswcGRuWiYCoNvfIAT9ifmX95/pubchart?oid=442379549&amp;format=interactive";

  const [selectedMonth, setSelectedMonth] = useState(july);

  function changeSelectedMonth() {
    let chartMonth = document.querySelector("#chartmonth").value;

    setSelectedMonth(
      chartMonth === "June" ? june : chartMonth === "July" ? july : august
    );
    // console.log(selectedMonth);
    // console.log(chartMonth);
  }

  return (
    <div className=" relative">
      <select
        name="Month"
        id="chartmonth"
        className=" absolute top-2 right-2 bg-transparent border border-pink-500 text-purple-100 rounded-md w-5"
        onChange={changeSelectedMonth}
      >
        <optgroup label="2023" className="bg-black selection:bg-green-500 ">
          <option value="June" selected>
            June
          </option>
          <option value="July">July</option>
          <option value="August">August</option>
        </optgroup>
      </select>

      <iframe
        className="mt-1 rounded-lg"
        width="960"
        height="349"
        scrolling="no"
        seamless
        src={`https://docs.google.com/spreadsheets/d/e/${selectedMonth}`}
      ></iframe>
    </div>
  );
}

export default StudyTracker;
