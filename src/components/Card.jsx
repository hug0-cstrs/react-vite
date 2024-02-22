import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../themeProvider";

const Card = () => {

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
      <a href="https://www.depistclic.fr/" target="_blank" rel="noreferrer">
        <img
          className="rounded-t-lg w-full"
          src="https://miro.medium.com/v2/resize:fit:1400/1*LLwJuqm5gVmnRiOOF1vOXQ.png"
          alt=""
        />
      </a>
      <div className={darkMode ? "p-5 rounded-b-lg" : "p-5 bg-gray-100 rounded-b-lg"}>
        <a href="https://www.depistclic.fr/" target="_blank" rel="noreferrer">
          <h5 className={darkMode ? "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" : "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-yellow-500"}>
            DepistClic
          </h5>
        </a>
        <p className={darkMode ? "mb-3 font-normal text-gray-700 dark:text-gray-400" : "mb-3 font-normal text-black dark:text-black"}>
          DepistClic is an independent decision-support tool for healthcare
          professionals. It uses the latest recommendations from learned
          societies to suggest a personalized course of action for screening
          type 2 diabetic patients for complications.
        </p>
        <a
          href="https://www.depistclic.fr/"
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

export default Card;
