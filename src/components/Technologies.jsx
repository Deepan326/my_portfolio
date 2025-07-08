import { RiReactjsLine } from "react-icons/ri";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiJson,
  SiJsonwebtokens,
  SiMongodb,
  SiNetlify,
  SiPostman,
  SiRender,
  SiTailwindcss,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";
const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
        <div className="p-4">
          <FaHtml5 className="text-7xl text-[#e34c26]" />
          
        </div>

        <div className="p-4">
          <FaCss3Alt className="text-7xl text-[#264de4]" />
        </div>

        <div className="p-4">
          <FaJsSquare className="text-7xl text-[#f7df1e]" />
        </div>

        <div className="p-4">
          <SiBootstrap className="text-7xl text-[#563d7c]" />
        </div>

        <div className="p-4">
          <SiTailwindcss className="text-7xl text-[#38bdf8]" />
        </div>
        <div className="p-4">
          <RiReactjsLine
            className="text-7xl text-[#61dbfb]
"
          />
        </div>

        <div className="p-4">
          <FaNodeJs className="text-7xl text-[#68a063]" />
        </div>
        <div className="p-4">
          <SiExpress className="text-7xl text-white" />
        </div>
        <div className="p-4">
          <SiMongodb className="text-7xl text-[#47a248]" />
        </div>

        <div className="p-4">
          <FaGitAlt className="text-7xl text-[#f05032]" />
        </div>
        <div className="p-4">
          <FaGithub className="text-7xl text-grey-400" />
        </div>

        <div className="p-4">
          <SiJsonwebtokens className="text-7xl text-[#dd9626]" />
        </div>

        <div className="p-4">
          <SiPostman className="text-7xl text-[#ef5b25]" />
        </div>

        <div className="p-4">
          <SiNetlify className="text-7xl text-[#00d1b2]" />
        </div>

        <div className="p-4">
          <SiRender className="text-7xl text-[#000]" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
