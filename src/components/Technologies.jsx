import { motion } from "framer-motion";
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
  SiJsonwebtokens,
  SiMongodb,
  SiNetlify,
  SiPostman,
  SiRender,
  SiTailwindcss,
} from "react-icons/si";

const iconAnimation = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const Technologies = () => {
  return (
    
    <div className="pb-24 py-20 " id="skills">
          <h2 className="my-20 text-center text-4xl font-bold ">Technologies</h2>
  

      <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
        {[
          { icon: FaHtml5, color: "#e34c26" },
          { icon: FaCss3Alt, color: "#264de4" },
          { icon: FaJsSquare, color: "#f7df1e" },
          { icon: SiBootstrap, color: "#563d7c" },
          { icon: SiTailwindcss, color: "#38bdf8" },
          { icon: RiReactjsLine, color: "#61dbfb" },
          { icon: FaNodeJs, color: "#68a063" },
          { icon: SiExpress, color: "#ffffff" },
          { icon: SiMongodb, color: "#47a248" },
          { icon: FaGitAlt, color: "#f05032" },
          { icon: FaGithub, color: "#888888" },
          // { icon: SiJsonwebtokens, color: "#dd9626" },
          { icon: SiPostman, color: "#ef5b25" },
          { icon: SiNetlify, color: "#00d1b2" },
          { icon: SiRender, color: "#ecdedeff" },
        ].map(({ icon: Icon, color }, i) => (
          <motion.div
            key={i}
            className="p-4"
            variants={iconAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{  amount: 0.5 }}
          >
            <Icon
              className="text-7xl transition-transform duration-500 hover:scale-150 hover:-translate-y-1"
              style={{ color }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
