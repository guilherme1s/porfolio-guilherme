import MenuIcon from "@mui/icons-material/Menu";
import { NavDesktop } from "../navDesktop";
import { NavMobile } from "../navMobile";

import { useState } from "react";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full md:w-80 h-20 md:h-screen bg-primary text-white">
      <div className="md:hidden flex justify-between items-center px-6 h-full">
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
        <NavMobile />
      </div>

      <NavDesktop />
    </div>
  );
}
