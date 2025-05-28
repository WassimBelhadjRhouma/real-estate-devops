import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Showcase from "./Showcase";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* You can add header, sidebar, footer here if needed */}
      <main>
        <Showcase />
        {children}
      </main>
    </>
  );
};

export default Layout;
