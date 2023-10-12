import { FaGlobe, FaPaintBrush, FaGamepad } from "react-icons/fa";

function Interests() {
  const interestsList = [
    {
      name: "Technology",
      icon: <FaGlobe size={34} />,
    },
    {
      name: "Design",
      icon: <FaPaintBrush size={34} />,
    },
    {
      name: "Games",
      icon: <FaGamepad size={34} />,
    },
  ];

  return (
    <div className="flex w-full mx-auto items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row my-4">
        <div className="w-full px-10 py-4">
          <h1 className="my-5 text-4xl font-bold text-primary">My Interests</h1>
          <ul className="flex flex-wrap justify-center gap-5">
            {interestsList.map((Interest) => (
              <li
                key={Interest.name}
                className="flex p-6 transition hover:scale-110 hover:text-accent "
                title={Interest.name}
              >
                <div className="flex w-20 flex-col items-center">
                  {Interest.icon}
                  {Interest.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Interests;
