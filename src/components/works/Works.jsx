import { worksData } from "../../data";
import "./works.scss"

export default function Works({currentSlide, setCurrentSlide}) {
  const handleClick = (way)=>{
    way === "left" 
      ? setCurrentSlide(currentSlide > 0 ? currentSlide-1: worksData.length -1) 
      : setCurrentSlide(currentSlide<worksData.length -1 ?currentSlide+1 : 0);
  }
  return (
    <div className="works" id="works">
        <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
          {worksData.map(d=>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="heading">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                  </div>
                  <p>
                    {d.desc}
                  </p>
                  <p>link: <a href={d.link}>{d.link}</a></p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>))}
        </div>
        <img src="assets/left arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
        <img src="assets/left arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
    </div>
  )
}
