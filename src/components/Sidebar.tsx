import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import { NavMobile } from "./NavMobile";
import { NavDesktop } from "./NavDesktop";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full xl:w-80 h-28 xl:h-screen bg-primary text-white">
      <div className="xl:hidden flex justify-between items-center px-12 h-full">
        <h1 className="text-3xl font-pacifico">Guilherme</h1>

        <MenuIcon
          fontSize="large"
          className="cursor-pointer"
          onClick={handleOpenMenu}
        />
      </div>

      <div
        className={`w-full justify-end flex overflow-hidden transition-all duration-300 ease-in-out transform ${
          open ? "opacity-100 -translate-y-5 p-5" : "opacity-0 -translate-y-5"
        }`}
      >
        <NavMobile
          about="#about"
          experience="#experience"
          skills="#skills"
          contact="#contact"
          projects="#projects"
        />
      </div>

      <NavDesktop
        about="#about"
        experience="#experience"
        skills="#skills"
        contact="#contact"
        projects="#projects"
      />
    </div>
  );
}
