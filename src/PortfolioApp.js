import { Intro } from "./components/intro/Intro";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Hotbar } from "./components/hotbar/Hotbar";
import { About } from "./components/contact/About";
import { Contact } from "./components/contact/Contact";


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
          <About/>
          <Portfolio/>
          {/* <Contact/> */}
        </div>
      </div>
    </div>
  );
}

export default PortfolioApp;
