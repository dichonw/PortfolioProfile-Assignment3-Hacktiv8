import { FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

function About() {
  const socmedList = [
    {
      name: "Github",
      link: "https://github.com/dichonw",
      icon: <FaGithubSquare size={35} />,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/dichonugroho",
      icon: <FaInstagramSquare size={35} />,
    },
  ];

  return (
    <div className="flex w-full mx-auto items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row my-4">
        <div className="w-full px-4 md:w-2/3 mx-24">
          <h1 className="my-2 text-4xl font-bold text-primary">About Me</h1>
          <p className="my-2 text-lg tracking-wide">
            An active student majoring in Information Systems at Merdeka
            University Malang who is able to think creatively and has an
            interest in technology and design
          </p>
          <h3 className="my-2 text-xl font-bold">Connected with me:</h3>
          <ul className="flex gap-2">
            {socmedList.map((social) => (
              <li key={socmedList.name} className="w-9">
                <div>
                  <a
                    href={social.link}
                    title={social.name}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.icon}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
