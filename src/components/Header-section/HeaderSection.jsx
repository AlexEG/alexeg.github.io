import logo from "../../assets/favicon.png";
import Icons from "../Projects-section/projects-data/Icons";

function HeaderSection() {
  // const imgStyles = `w-11 ${"brightness-50"}`;

  return (
    <div className=" h-96  border-pink-500">
      {/* logo & name [start] */}
      <div className="flex justify-center items-center flex-col mb-5">
        <img className="w-20" src={logo} alt="" />

        <span className="magic-text px-3 pt-0.5 font-bold text-lg select-none">{`<AlexEG />`}</span>
      </div>
      {/* logo & name [end] */}

      <div className=" max-w-screen-lg mx-auto flex gap-3 mb-3 justify-end">
        <img
          className="w-11 brightness-110 "
          src={Icons.NodeJS}
          alt="NodeJS"
          title="NodeJS"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.TailwindCSS}
          alt="TailwindCSS"
          title="TailwindCSS"
        />
        <img
          className="w-11 animate-pulse brightness-75"
          src={Icons.TS}
          alt="TS"
          title="TS"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.Vite}
          alt="Vite"
          title="Vite"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.Astro}
          alt="Astro"
          title="Astro"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.CPP}
          alt="CPP"
          title="CPP"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.HTML}
          alt="HTML"
          title="HTML"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.Electron}
          alt="Electron"
          title="Electron"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.Sass}
          alt="Sass"
          title="Sass"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.JS}
          alt="JS"
          title="JS"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.Markdown}
          alt="Markdown"
          title="Markdown"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.Replit}
          alt="Replit"
          title="Replit"
        />

        <img
          className="w-11 brightness-110"
          src={Icons.Netlify}
          alt="Netlify"
          title="Netlify"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.R}
          alt="R"
          title="R"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.WindiCSS}
          alt="WindiCSS"
          title="WindiCSS"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.React}
          alt="React"
          title="React"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.CoffeeScript}
          alt="CoffeeScript"
          title="CoffeeScript"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.V}
          alt="V"
          title="V"
        />
      </div>

      <div className="  max-w-screen-lg mx-auto flex gap-3 mb-3 justify-start">
        {/* 18 */}
        <img
          className={`w-11 brightness-[0.35]`}
          src={Icons.AWS}
          alt="AWS"
          title="AWS"
        />
        <img
          className={`w-11 brightness-110`}
          src={Icons.Electron}
          alt="Electron"
          title="Electron"
        />
        <img
          className={`w-11 brightness-[0.35]`}
          src={Icons.Firebase}
          alt="Firebase"
          title="Firebase"
        />
        <img
          className={`w-11 brightness-110`}
          src={Icons.GoLang}
          alt="GoLang"
          title="GoLang"
        />
        <img
          className={`w-11 brightness-[0.35]`}
          src={Icons.Clojure}
          alt="Clojure"
          title="Clojure"
        />
        <img
          className={`w-11 brightness-[0.35]`}
          src={Icons.Atom}
          alt="Atom"
          title="Atom"
        />
        <img
          className={`w-11 brightness-110`}
          src={Icons.VueJS}
          alt="VueJS"
          title="VueJS"
        />
        <img
          className={`w-11 brightness-[0.35]`}
          src={Icons.Vercel}
          alt="Vercel"
          title="Vercel"
        />
        <img
          className={`w-11 brightness-[0.35]`}
          src={Icons.Cloudflare}
          alt="Cloudflare"
          title="Cloudflare"
        />
        <img
          className={`w-11 brightness-[0.35]`}
          src={Icons.DENO}
          alt="DENO"
          title="DENO"
        />
        <img
          className={`w-11 brightness-110`}
          src={Icons.NeoVim}
          alt="NeoVim"
          title="NeoVim"
        />
        <img
          className={`w-11 brightness-[0.35]`}
          src={Icons.VIM}
          alt="VIM"
          title="VIM"
        />
        <img
          className={`w-11 brightness-[0.35]`}
          src={Icons.Elixir}
          alt="Elixir"
          title="Elixir"
        />
        <img
          className={`w-11 brightness-[0.35]`}
          src={Icons.Zig}
          alt="Zig"
          title="Zig"
        />
        <img
          className={`w-11 brightness-[0.35]`}
          src={Icons.Remix}
          alt="Remix"
          title="Remix"
        />
        <img
          className={`w-11 brightness-[0.35]`}
          src={Icons.Ruby}
          alt="Ruby"
          title="Ruby"
        />
        <img
          className={`w-11 brightness-110`}
          src={Icons.Rust}
          alt="Rust"
          title="Rust"
        />
        <img
          className={`w-11 brightness-110`}
          src={Icons.Bash}
          alt="Bash"
          title="Bash"
        />
      </div>

      <div className="  max-w-screen-lg mx-auto flex gap-3 mb-3 justify-end ">
        <img
          className="w-11 brightness-110"
          src={Icons.VSCode}
          alt="VSCode"
          title="VSCode"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.VisualStudio}
          alt="VisualStudio"
          title="VisualStudio"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.StyledComponents}
          alt="StyledComponents"
          title="StyledComponents"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.Regex}
          alt="Regex"
          title="Regex"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.Angular}
          alt="Angular"
          title="Angular"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.NextJS}
          alt="NextJS"
          title="NextJS"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.CS}
          alt="CS"
          title="CS"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.D3}
          alt="D3"
          title="D3"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.DevTo}
          alt="DevTo"
          title="DevTo"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.Docker}
          alt="Docker"
          title="Docker"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.Figma}
          alt="Figma"
          title="Figma"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.Gulp}
          alt="Gulp"
          title="Gulp"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.PlanetScale}
          alt="PlanetScale"
          title="PlanetScale"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.Prisma}
          alt="Prisma"
          title="Prisma"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.WebAssembly}
          alt="WebAssembly"
          title="WebAssembly"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.Webflow}
          alt="Webflow"
          title="Webflow"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.GitLab}
          alt="GitLab"
          title="GitLab"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.Heroku}
          alt="Heroku"
          title="Heroku"
        />
      </div>

      <div className="  max-w-screen-lg mx-auto flex gap-3 mb-3 justify-start ">
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.PHP}
          alt="PHP"
          title="PHP"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.Plan9}
          alt="Plan9"
          title="Plan9"
        />
        <img className="w-11 brightness-110" src={Icons.C} alt="C" title="C" />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.PostgreSQL}
          alt="PostgreSQL"
          title="PostgreSQL"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.PyTorch}
          alt="PyTorch"
          title="PyTorch"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.Python}
          alt="Python"
          title="Python"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.CodePen}
          alt="CodePen"
          title="CodePen"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.Supabase}
          alt="Supabase"
          title="Supabase"
        />
        <img
          className="w-11 animate-pulse brightness-75"
          src={Icons.GithubActions}
          alt="GithubActions"
          title="GithubActions"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.Git}
          alt="Git"
          title="Git"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.Github}
          alt="Github"
          title="Github"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.MaterialUI}
          alt="MaterialUI"
          title="MaterialUI"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.MySQL}
          alt="MySQL"
          title="MySQL"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.NestJS}
          alt="NestJS"
          title="NestJS"
        />
        <img
          className="w-11 brightness-110"
          src={Icons.NuxtJS}
          alt="NuxtJS"
          title="NuxtJS"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.StackOverflow}
          alt="StackOverflow"
          title="StackOverflow"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.Swift}
          alt="Swift"
          title="Swift"
        />
        <img
          className="w-11 brightness-[0.35]"
          src={Icons.Solidity}
          alt="Solidity"
          title="Solidity"
        />
      </div>
    </div>
  );
}

export default HeaderSection;
