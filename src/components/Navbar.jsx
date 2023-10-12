import { NavLink } from "react-router-dom";

function Navbar() {
  const navList = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Experiences",
      path: "/experiences",
    },
    {
      title: "Skills",
      path: "/skills",
    },
    {
      title: "Interests",
      path: "/interests",
    },
    {
      title: "Awards",
      path: "/awards",
    },
  ];

  return (
    <header>
      <nav className="flex justify-center items-center w-full h-16 px-4 text-black bg-white fixed z-50 ">
        <ul className="hidden md:flex space-x-4">
          {navList.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  borderBottom: isActive ? "3px solid #000" : "transparent",
                  fontWeight: isActive ? "bold" : "normal",
                  transition: "all 0.2s",
                })}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
