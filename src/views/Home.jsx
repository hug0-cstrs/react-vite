import { motion } from "framer-motion";
import { useContext } from "react";
import Typical from "react-typical";
import heroBg from "../assets/hugo.jpg";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className={darkMode === true ? "bg-gray-100" : "bg-black"}>
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className={`sm:text-center lg:text-left ${ window.innerWidth < 640 ? "text-center mt-40" : ""}`}>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? "block text-black" : "text-gray-200"}
              >
                Hi, I am Hugo
              </motion.span>
              <span
                className={
                  darkMode
                    ? "block text-blue-500 z-0 lg:inline"
                    : "block text-yellow-500 z-0 lg:inline"
                }
              >
                <Typical
                  steps={[
                    "Front End Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Student Developer",
                    1000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I am a Front-End / Full-Stack Developer. I am currently studing at
              Holberton School Toulouse as a Full-Stack Developer
            </p>
            <div className={`flex lg:justify-start xl:justify-start sm:justify-center md:justify-center ${ window.innerWidth < 640 ? "flex justify-center items-center" : ""}`}>
              {contactLinks.map((el, index) => (
                <a
                  key={index}
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>
            <div className={`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start ${ window.innerWidth < 640 ? "flex justify-center items-center" : ""}`}>
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a
                  href="https://drive.google.com/file/d/1ZgW5pcE3PYXTTU01yWPr9r3MorLwoJXo/view?usp=sharing"
                  className={
                    darkMode
                      ? "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 md:py-4 md:text-lg md:px-10"
                      : "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-100 bg-yellow-500 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <motion.img
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
            src={heroBg}
            alt=""
            className={`xl:w-3/6 xl:h-4/5 xl:object-center lg:w-3/6 lg:h-3/6 lg:object-center md:w-3/6 rounded-3xl md:rounded-3xl md:h-3/6 h-auto object-cover md:object-cover md:object-center md:block h-500 sm:w-2/5 sm:h-2/5 sm:rounded-3xl sm:object-cover sm:object-center sm:block sm:mt-8 ${ window.innerWidth < 640 ? "rounded-3xl h-3/5 w-3/5 mt-6" : ""}`}
          />
        </main>
      </div>
    </>
  );
};

export default Home;
