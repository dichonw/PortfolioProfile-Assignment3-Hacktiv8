import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithubSquare,
  FaLaravel,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  const skillsList = [
    {
      name: "HTML5",
      icon: <FaHtml5 size={34} />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={34} />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare size={34} />,
    },
    {
      name: "Git",
      icon: <FaGithubSquare size={34} />,
    },
    {
      name: "Laravel",
      icon: <FaLaravel size={34} />,
    },
    {
      name: "React",
      icon: <FaReact size={34} />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss size={34} />,
    },
    {
      name: "Figma",
      icon: <FaFigma size={34} colo />,
    },
  ];

  return (
    <div className="flex w-full mx-auto items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row my-4">
        <div className="w-full px-4 md:w-2/3 mx-24">
          <h1 className="my-5 text-4xl font-bold text-primary">My Skills</h1>
          <ul className="flex flex-wrap justify-center gap-5">
            {skillsList.map((skill) => (
              <li
                key={skill.name}
                className="flex p-6 transition hover:scale-110 hover:text-accent "
                title={skill.name}
              >
                <div className="flex w-20 flex-col items-center">
                  {skill.icon}
                  {skill.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
