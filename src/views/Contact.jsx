import { motion } from "framer-motion";
import { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 md:h-screen"
          : "bg-black pt-24 text-white md:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center z-0"
              : "text-5xl font-bold px-4 md:px-0 text-center z-0 text-yellow-500"
          }
        >
          Contact
        </h2>
        <div>
          <h4
            className={
              darkMode
                ? "mt-12 text-3xl font-semibold text-blue-500"
                : "mt-12 text-3xl font-semibold text-gray-100"
            }
          >
            Connect with me
          </h4>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            <motion.form
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
            >
              <div className="my-6">
                <label
                  htmlFor="name"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-yellow-500"
                  }
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-yellow-500"
                  }
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-yellow-500"
                  }
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between ">
                <div className="underline">
                  <a
                    href="mailto:6263@holbertonstudents.com"
                    className="font-bold"
                  >
                    Send me email directly
                  </a>
                </div>
                <button
                  className={
                    darkMode
                      ? "bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400"
                      : "bg-yellow-500 text-white px-4 py-2 w-40 rounded-md hover:bg-yellow-400"
                  }
                >
                  <a
                    href="mailto:6263@holbertonstudents.com"
                    className="font-bold"
                  >
                    Submit
                  </a>
                </button>
              </div>
            </motion.form>
          </div>
          <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
            {/* <h1 className="text-3xl font-bold">Phone</h1>
            <a
              href="hello"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              +91 8285631499
            </a> */}
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="/"
              className={
                darkMode
                  ? "mb-12 mt-4 font-semibold text-blue-700 text-xl"
                  : "mb-12 mt-4 font-semibold text-yellow-500 text-xl"
              }
            >
              6263@holbertonstudents.com
            </a>
            <h1 className="text-3xl  font-bold">Address</h1>
            <a
              href="/"
              className={
                darkMode
                  ? "mt-4  mb-12 md:text-right font-semibold text-blue-700 text-xl"
                  : "mt-4  mb-12 md:text-right font-semibold text-yellow-500 text-xl"
              }
            >
              Toulouse
              <br />
              France
            </a>
            <h1 className="text-3xl  font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el, index) => (
                <a
                  key={index}
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="" src={el.url} />
                  {<p className="text-md mt-2 hover:hidden">{el.name}</p>}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center md:mt-20"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-20"
        }
      >
        Made with
        <div className={darkMode ? "text-red-500 px-2 text-2xl" : "text-yellow-500 px-2 text-2xl"}>&#10084;</div>
        by Hugo Castéras
      </div>
    </div>
  );
};

export default Contact;
