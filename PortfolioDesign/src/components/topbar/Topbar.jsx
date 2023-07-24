import "./topbar.scss"
import { Mail, Person } from '@mui/icons-material';
export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span className="details">+91 9760746380</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span className="detail">adityatiwari8275@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen) }>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
