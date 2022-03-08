import { Contact } from "./components/contact/Contact";
import { Intro } from "./components/intro/Intro";
import { Portfolio } from "./components/portfolio/Portfolio";

import { Waves } from "./components/contact/Waves";
import { Hotbar } from "./components/hotbar/Hotbar";

function PortfolioApp() {

  // const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className='portfolio-app'>

      <div className="bar">

        <Hotbar/>
      </div>
      <div className="app" >
        <div className="sections">
          <Intro/>
          <Waves/>
          <Portfolio/>
          {/* <Contact/> */}
        </div>
      </div>
    </div>
  );
}

export default PortfolioApp;
