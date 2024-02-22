import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import simpleshell from "../assets/SimpleShell.png";

const Card2 = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <motion.div
      initial={"hidden"}
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
      className="max-w-xl bg-gray-100 rounded-lg border border-blue-300 shadow-xl dark:bg-gray-800 dark:border-blue-300 my-8"
    >
      <a href="https://github.com/v-dav/holbertonschool-simple_shell" target="_blank" rel="noreferrer">
        <img
          className="rounded-t-lg w-full h-60"
          src={simpleshell}
          alt=""
        />
      </a>
      <div className={darkMode ? "p-5 rounded-b-lg" : "p-5 bg-gray-100 rounded-b-lg"}>
        <a href="https://github.com/v-dav/holbertonschool-simple_shell" target="_blank" rel="noreferrer">
          <h5 className={darkMode ? "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" : "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-yellow-500"}>
            Simple Shell
          </h5>
        </a>
        <p className={darkMode ? "mb-3 font-normal text-gray-700 dark:text-gray-400" : "mb-3 font-normal text-black dark:text-black"}>
        The objective of this project is to create from scratch a simple UNIX command interpreter with limited functionality but applying the core concepts of a more robust shell. In simple words, the shell is a program that takes commands from the keyboard and gives them to the operating system to perform. It incorporates many features and generally executes standard Shell commands found in PATH environment variable.cd command isn&apos;t handled.
        </p>
        <a
          href="https://github.com/v-dav/holbertonschool-simple_shell"
          target="_blank"
          rel="noopener noreferrer"
          className={darkMode ? "inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300" : "inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-200 hover:text-gray-900"}
        >
          Read more
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Card2;
