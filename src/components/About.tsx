import guilhermePerfil from "../assets/guilherme-perfil.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function About() {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-14 w-full px-12 xl:w-4xl xl:p-0">
      <div className="flex flex-col gap-4 xl:w-1/2 justify-center">
        <div>
          <h1 className="text-5xl font-medium uppercase mb-2">
            Guilherme Evangelista
          </h1>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Desenvolvedor Full-Stack
          </h3>
        </div>

        <p className="mt-5">
          Desenvolvedor Full Stack / engenheiro da computação com destaque em
          front-end. Apaixonado por criar soluções modernas, tenho experiência
          experiência profissional em todas as etapas do ciclo de
          desenvolvimento de sistemas. Trabalhando principalmente com React,
          Vue.js, TypeScript, JavaScript, PHP e MySQL.
        </p>

        <div className="xl:hidden flex flex-col mt-5 gap-2">
          <div className="flex items-center gap-2">
            <GitHubIcon fontSize="large" />
            <a href="https://github.com/guilherme1s" target="_blank">
              Github
            </a>
          </div>

          <div className="flex items-center gap-2">
            <LinkedInIcon fontSize="large" />
            <a
              href="https://www.linkedin.com/in/guilherme-silva-evangelista022/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 justify-center items-center flex">
        <img
          src={guilhermePerfil}
          className="hidden xl:flex rounded-full border-4 border-white outline-4 outline-primary"
          alt="Imagem perfil Guilherme Evangelista"
        />
      </div>
    </div>
  );
}
