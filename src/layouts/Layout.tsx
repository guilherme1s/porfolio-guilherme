import type { ReactNode } from "react";
import { SidebarSection } from "../components/sidebar/SidebarSection";
import { Footer } from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="xl:grid xl:grid-cols-[auto_1fr] h-screen dark:bg-dark-primary transition-colors duration-300">
      <SidebarSection />

      <main
        className="overflow-y-auto bg-white flex flex-col gap-14 xl:gap-14 mt-12 pb-12 xl:mt-0 text-primary 
       dark:text-white dark:bg-dark-primary transition-colors duration-300"
      >
        {children}
      </main>

      <footer className="xl:hidden">
        <Footer />
      </footer>
    </div>
  );
}
