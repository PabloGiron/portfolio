import { Contact } from "./components/contact/Contact";
import { Intro } from "./components/intro/Intro";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Topbar } from "./components/topbar/Topbar";
import { Works } from "./components/works/Works";

import "../src/styles/portfolioApp.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function PortfolioApp() {

  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen= { menuOpen } setmenuOpen= { setmenuOpen } />
      <Menu menuOpen= { menuOpen } setmenuOpen= { setmenuOpen } />

      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default PortfolioApp;
