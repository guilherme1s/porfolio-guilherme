import type { ReactNode } from "react";
import { SidebarSection } from "../components/sidebar/SidebarSection";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="xl:grid xl:grid-cols-[auto_1fr] h-screen">
      <SidebarSection />

      <main className="overflow-y-auto flex flex-col gap-14 xl:gap-14 mt-12 pb-12 xl:mt-0">
        {children}
      </main>
    </div>
  );
}
