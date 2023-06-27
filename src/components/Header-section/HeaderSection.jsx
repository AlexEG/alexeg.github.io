import logo from "../../assets/favicon.png";
import Icons from "../Projects-section/projects-data/Icons";
// import UserData from "../UserData";
import { languagesToolsGoodAt } from "../UserData";
import { languagesToolsStudyingNow } from "../UserData";

function HeaderSection() {
  const unknownLangTool = `brightness-[0.35]`;
  const studyingNowLangTool = `animate-pulse brightness-75`;
  const goodAtLangTool = `brightness-110`;

  const allLanguagesToolsIconsArr = Object.values(Icons);
  const allLanguagesToolsIconsArrTitle = Object.keys(Icons);
  // console.log(allLanguagesToolsIconsArr);
  // console.log(allLanguagesToolsIconsArrTitle);

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
    <div className=" h-96 border-2 overflow-hidden border-pink-500">
      {/* logo & name [start] */}
      <div className="flex justify-center items-center flex-col mb-5">
        <img className="w-20" src={logo} alt="" />

        <span className="magic-text px-3 pt-0.5  font-bold text-lg select-none">{`<AlexEG />`}</span>
      </div>
      {/* logo & name [end] */}

      <div className=" animate-[languages-tools-rows-animation-rl_2.5s_ease-in-out_1_forwards] max-w-screen-lg mx-auto flex gap-3 mb-3 justify-end ">
        <div className="flex flex-wrap gap-3">{row1}</div>
      </div>
      <div className=" animate-[languages-tools-rows-animation-lr_2.5s_ease-in-out_1_forwards] max-w-screen-lg mx-auto flex gap-3 mb-3 justify-start ">
        <div className="flex flex-wrap gap-3">{row2}</div>
      </div>
      <div className=" animate-[languages-tools-rows-animation-rl_2.5s_ease-in-out_1_forwards] max-w-screen-lg mx-auto flex gap-3 mb-3 justify-end ">
        <div className="flex flex-wrap gap-3">{row3}</div>
      </div>
      <div className=" animate-[languages-tools-rows-animation-lr_2.5s_ease-in-out_1_forwards] max-w-screen-lg mx-auto flex gap-3 mb-3 justify-start ">
        <div className="flex flex-wrap gap-3">{row4}</div>
      </div>
    </div>
  );
}

export default HeaderSection;
