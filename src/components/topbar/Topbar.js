import{ AssignmentIndSharp, Mail, GitHub, LinkedIn } from "@material-ui/icons"

export const Topbar = ({ menuOpen, setmenuOpen }) => {
  return (
    <div className={'topbar '+ (menuOpen && "active")}>
      <div className="wrapper">

        <div className="topbar__left ">
          <a href="#intro" className="logo"> <img  className="topbar__image" src="assets/zorro.png" alt="" /></a>
          
          <div className="itemContainer">
            <LinkedIn className="icon"/>
            <span>Pablo Giron</span>

          </div>
          <div className="itemContainer">
            <GitHub className="icon"/>
            <span>PabloGiron</span>

          </div>
          <div className="itemContainer">
            <AssignmentIndSharp className="icon"/>
            <span>+502 4856 5452</span>

          </div>

          <div className="itemContainer">
            <Mail className="icon"/>
            <span>p4blogiron@gmail.com</span>

          </div>
        </div>

        <div className="topbar__right">
          <div className="topbar__hamburguer" onClick={()=>setmenuOpen(!menuOpen )}>
            <span> Line 1</span>
            <span> Line 2</span>
            <span> Line 3</span>
          </div>
        </div>

      </div>
    </div>
  )
}
