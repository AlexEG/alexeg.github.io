import logo from "../../assets/favicon.png";
import Icons from "../Projects-section/projects-data/Icons";
function HeaderSection() {
  const imgStyles = `w-11 ${"brightness-50"}`;

  return (
    <div className=" h-96 border-2 border-pink-500">
      {/* logo & name [start] */}
      <div className="flex justify-center items-center flex-col mb-5">
        <img className="w-20" src={logo} alt="" />

        <span className="magic-text px-3 pt-0.5 font-bold text-lg select-none">{`<AlexEG />`}</span>
      </div>
      {/* logo & name [end] */}

      <div className=" bg-gray-800 max-w-screen-lg mx-auto flex gap-3 mb-3 justify-end">
        <img className="w-11 brightness-[1.2] " src={Icons.NODEJS} alt="" />
        <img className="w-11 brightness-[1.2]" src={Icons.TIALWINDCSS} alt="" />
        <img className="w-11 brightness-[1.2]" src={Icons.TS} alt="" />
        <img className="w-11 brightness-[1.2]" src={Icons.VITE} alt="" />
        <img className="w-11 brightness-[1.2]" src={Icons.SASS} alt="" />
      </div>

      <div className="  max-w-screen-lg mx-auto flex gap-3 mb-3 justify-center">
        {/* 18 */}
        <img className={`w-11 brightness-[0.4]`} src={Icons.AWS} alt="" />
        <img className={`w-11 brightness-110`} src={Icons.ELECTRON} alt="" />
        <img className={`w-11 brightness-[0.4]`} src={Icons.FIREBASE} alt="" />
        <img className={`w-11 brightness-110`} src={Icons.GOLANG} alt="" />
        <img className={`w-11 brightness-[0.4]`} src={Icons.Clojure} alt="" />
        <img className={`w-11 brightness-[0.4]`} src={Icons.Atom} alt="" />
        <img className={`w-11 brightness-110`} src={Icons.VueJS} alt="" />
        <img className={`w-11 brightness-[0.4]`} src={Icons.Vercel} alt="" />
        <img
          className={`w-11 brightness-[0.4]`}
          src={Icons.Cloudflare}
          alt=""
        />
        <img className={`w-11 brightness-[0.4]`} src={Icons.DENO} alt="" />
        <img className={`w-11 brightness-110`} src={Icons.NeoVim} alt="" />
        <img className={`w-11 brightness-[0.4]`} src={Icons.VIM} alt="" />
        <img className={`w-11 brightness-[0.4]`} src={Icons.Elixir} alt="" />
        <img className={`w-11 brightness-110`} src={Icons.Rust} alt="" />
        <img className={`w-11 brightness-[0.4]`} src={Icons.Zig} alt="" />
        <img className={`w-11 brightness-[0.4]`} src={Icons.Remix} alt="" />
        <img className={`w-11 brightness-[0.4]`} src={Icons.Ruby} alt="" />
        <img className={`w-11 brightness-110`} src={Icons.Bash} alt="" />
      </div>

      <div className="  max-w-screen-lg mx-auto flex gap-3 mb-3 justify-end">
        <img className="w-11 brightness-[1.2]" src={Icons.C} alt="" />
        <img className="w-11 brightness-[1.2]" src={Icons.ELECTRON} alt="" />
        <img className="w-11 brightness-[1.2]" src={Icons.FIREBASE} alt="" />
        <img className="w-11 brightness-[1.2]" src={Icons.GOLANG} alt="" />
        <img className="w-11 brightness-[1.2]" src={Icons.MARKDOWN} alt="" />
      </div>
    </div>
  );
}

export default HeaderSection;
