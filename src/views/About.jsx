import { motion } from "framer-motion";
import { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-gray-100" : "bg-black"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-yellow-500"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className={
            darkMode
              ? "mt-12 text-3xl font-semibold text-blue-500" : "mt-12 text-3xl font-semibold text-yellow-500"}>
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Since February 2023 I&apos;ve been studying to become a full-stack web
              developer at Holberton School Toulouse. I&apos;ve discovered a new
              passion for tech. I&apos;m passionate about the visual part of
              development, i.e. the Front-End, and I also love the DevOps part.{" "}
              <br />
              I&apos;m very curious and keep up to date with the latest technological
              advances.
            </p>
          </motion.div>
          <motion.div>
            <h4 className={darkMode ? "mt-12 text-3xl font-semibold text-blue-500" : "mt-12 text-3xl font-semibold text-yellow-500"}>
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Here&apos;s the list of technologies I learned to master on my own and
              during my studies.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 justify-between ">
            {techStack.map((el, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
