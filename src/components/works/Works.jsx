import { useState } from "react"
import "./works.scss"

export default function Works() {
      const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
       {
        id: "1",
        icon: "./assets/cpp logo.png",
        title: "Web Design",
        desc: "some description",
        img: "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png",
       },
       {
        id: "2",
        icon: "./assets/cpp logo.png",
        title: "Web Design 2",
        desc: "some description",
        img: "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png",
       },
       {
        id: "3",
        icon: "./assets/cpp logo.png",
        title: "Web Design 3",
        desc: "some description",
        img: "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png",
       },
    ]
  const handleClick = (way)=>{
    way === "left" 
      ? setCurrentSlide(currentSlide > 0 ? currentSlide-1: 2) 
      : setCurrentSlide(currentSlide<data.length -1 ?currentSlide+1 : 0);
  }
  return (
    <div className="works" id = "works">
        <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
          {data.map(d=>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>))}
        </div>
        <img src="https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
        <img src="https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
    </div>
  )
}
