import logo from "../../assets/favicon.png";
import Icons from "../Projects-section/Icons";
// import UserData from "../UserData";
import { languagesToolsGoodAt } from "../User-data/UserData";
import { languagesToolsStudyingNow } from "../User-data/UserData";

function HeaderSection() {
  const unknownLangTool = `brightness-[0.35]`;
  const studyingNowLangTool = `animate-pulse brightness-75`;
  const goodAtLangTool = `brightness-110`;

  const allLanguagesToolsIconsArr = Object.values(Icons);
  const allLanguagesToolsIconsArrTitle = Object.keys(Icons);
  // console.log(allLanguagesToolsIconsArr);
  // console.log(allLanguagesToolsIconsArrTitle);

  //* https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
  function languagesToolRandomOrder(array1, array2) {
    for (let i = array1.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array1[i], array1[j]] = [array1[j], array1[i]];
      [array2[i], array2[j]] = [array2[j], array2[i]];
    }
  }

  languagesToolRandomOrder(
    allLanguagesToolsIconsArr,
    allLanguagesToolsIconsArrTitle
  );

  const [row1, row2, row3, row4] = [[], [], [], []];

  function imgJsx(icon, i) {
    return (
      <img
        key={icon}
        className={`w-11 ${
          languagesToolsGoodAt.includes(allLanguagesToolsIconsArrTitle[i])
            ? goodAtLangTool
            : languagesToolsStudyingNow.includes(
                allLanguagesToolsIconsArrTitle[i]
              )
            ? studyingNowLangTool
            : unknownLangTool
        }`}
        src={icon}
        alt={allLanguagesToolsIconsArrTitle[i]}
        title={allLanguagesToolsIconsArrTitle[i]}
      />
    );
  }
  allLanguagesToolsIconsArr.map((icon, i) =>
    i < 18
      ? row1.push(imgJsx(icon, i))
      : i < 36
      ? row2.push(imgJsx(icon, i))
      : i < 54
      ? row3.push(imgJsx(icon, i))
      : row4.push(imgJsx(icon, i))
  );
  // console.log(row1,);
  // console.log(row2);
  // console.log(row3);
  // console.log(row4);
  return (
    <div className=" h-96  overflow-hidden ">
      {/* logo & name [start] */}
      <div className="flex justify-center items-center flex-col mb-5">
        <img className="w-20" src={logo} alt="" />

        <span className="magic-text px-3 pt-0.5  font-bold text-lg select-none">{`<AlexEG />`}</span>
      </div>
      {/* logo & name [end] */}

      <div className=" animate-[languagesToolsRowsAnimationRL_2.5s_ease-in-out_1_forwards] max-w-screen-lg mx-auto flex gap-3 mb-3 justify-end ">
        <div className="flex flex-wrap gap-3">{row1}</div>
      </div>
      <div className=" animate-[languagesToolsRowsAnimationLR_2.5s_ease-in-out_1_forwards] max-w-screen-lg mx-auto flex gap-3 mb-3 justify-start ">
        <div className="flex flex-wrap gap-3">{row2}</div>
      </div>
      <div className=" animate-[languagesToolsRowsAnimationRL_2.5s_ease-in-out_1_forwards] max-w-screen-lg mx-auto flex gap-3 mb-3 justify-end ">
        <div className="flex flex-wrap gap-3">{row3}</div>
      </div>
      <div className=" animate-[languagesToolsRowsAnimationLR_2.5s_ease-in-out_1_forwards] max-w-screen-lg mx-auto flex gap-3 mb-3 justify-start ">
        <div className="flex flex-wrap gap-3">{row4}</div>
      </div>
    </div>
  );
}

export default HeaderSection;
