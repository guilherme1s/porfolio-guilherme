import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

export function NavMobile() {
  return (
    <nav className="xl:hidden bg-white rounded-xl p-6 w-fit shadow-md -translate-4">
      <ul className="flex flex-col gap-6">
        <li className="flex items-center gap-2">
          <PersonOutlineOutlinedIcon
            fontSize="small"
            className="text-primary"
          />
          <a href="#" className="font-sans font-light text-primary">
            Sobre Mim
          </a>
        </li>

        <li className="flex items-center gap-2">
          <WorkOutlineOutlinedIcon fontSize="small" className="text-primary" />
          <a href="#" className="font-sans font-light text-primary">
            Experiências
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FolderOpenOutlinedIcon fontSize="small" className="text-primary" />
          <a href="#" className="font-sans font-light text-primary">
            Projetos
          </a>
        </li>

        <li className="flex items-center gap-2">
          <BuildOutlinedIcon fontSize="small" className="text-primary" />
          <a href="#" className="font-sans font-light text-primary">
            Habilidades
          </a>
        </li>

        <li className="flex items-center gap-2">
          <MailOutlineOutlinedIcon fontSize="small" className="text-primary" />
          <a href="#" className="font-sans font-light text-primary">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
