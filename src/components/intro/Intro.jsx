import './intro.scss'
import {KeyboardArrowDown} from "@material-ui/icons"
import { Typewriter } from 'react-simple-typewriter'

export default function Intro() {

  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/portrait.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm </h2>
            <h1>Omar Yahia</h1>
            <h3>&gt; UCI&nbsp;
            <Typewriter 
              className="typing" 
              words = {['Hobbyist Programmer', 'CS Student', 'Anteater']} 
              loop = {0} //for infinite looping
              cursor
            />
            </h3>
          </div>
          <a href="#portfolio">
            <KeyboardArrowDown className="icon"/>
          </a>
        </div>
    </div>
  )
}
