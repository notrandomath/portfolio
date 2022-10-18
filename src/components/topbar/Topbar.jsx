import "./topbar.scss"
import {Phone, Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className = "wrapper">
        <div className="left">
          <a href="#intro" className="logo">Omar's Portfolio Page.</a>
          <div className="itemContainer">
            <Phone className="icon"/>
            <span>+1(909)682-9840</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>omar@seba3y.com</span>
          </div>
        </div>
        <h1>Hello</h1>
        <div className="right">
          right 
        </div>
      </div>
    </div>
  )
}
