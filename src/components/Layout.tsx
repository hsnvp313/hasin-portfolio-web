import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14">{children}</main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Hasin Swalah VP. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
