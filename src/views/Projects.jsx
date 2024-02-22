import { useContext } from "react";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-gray-100 text-black" : "bg-black text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className={darkMode ? "text-5xl font-bold px-4 md:px-0 text-center text-black" : "text-5xl font-bold px-4 md:px-0 text-center text-yellow-500"}>
          Projects
        </h2>
        <h4 className={darkMode ? "mt-16 text-3xl font-semibold text-blue-500" : "mt-16 text-3xl font-semibold text-gray-100"}>
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <Card />
          <Card2 />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Projects;
