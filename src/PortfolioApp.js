import { Contact } from "./components/contact/Contact";
import { Intro } from "./components/intro/Intro";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Topbar } from "./components/topbar/Topbar";

import { useState } from "react";
import Menu from "./components/menu/Menu";
import { Waves } from "./components/contact/Waves";


function PortfolioApp() {

  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className="app" >

      <Topbar menuOpen= { menuOpen } setmenuOpen= { setmenuOpen } />

      <Menu menuOpen= { menuOpen } setmenuOpen= { setmenuOpen } />

      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contact/>
        <Waves/>
      </div>
    </div>
  );
}

export default PortfolioApp;
