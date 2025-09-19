import { Sidebar } from "./components/Sidebar";
import { About } from "./components/About";

export function App() {
  return (
    <div className="grid grid-rows-[auto_1fr] xl:grid-cols-[auto_1fr] h-screen">
      <Sidebar />
      
      <div className="xl:grid place-items-center">
        <About />
      </div>
    </div>
  );
}
