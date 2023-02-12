import { useState } from "react"
import "./works.scss"

export default function Works() {
      const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
       {
        id: "1",
        icon: "https://cdn.pixabay.com/photo/2015/12/03/01/27/play-1073616_1280.png",
        title: "Omar's Entertainmentopedia",
        desc: 
          `A fullstack application with a mySQL database 
          that stores info about the entertainment that I've consumed as well 
          as the rating I gave it. The frontend then searches the database
          as well as adds to it.`,
        img: "./assets/entertainmentopedia.png",
        link: "https://omars-entertainmentopedia.yahia.space",
       },
       {
        id: "2",
        icon: "https://cdn.pixabay.com/photo/2015/12/03/01/27/play-1073616_1280.png",
        title: "Omar's Entertainmentopedia",
        desc: 
          `A fullstack application with a mySQL database 
          that stores info about the entertainment that I've consumed as well 
          as the rating I gave it. The frontend then searches the database
          as well as adds to it.`,
        img: "./assets/entertainmentopedia.png",
        link: "https://omars-entertainmentopedia.yahia.space",
       },
       {
        id: "3",
        icon: "https://cdn.pixabay.com/photo/2015/12/03/01/27/play-1073616_1280.png",
        title: "Omar's Entertainmentopedia",
        desc: 
          `A fullstack application with a mySQL database 
          that stores info about the entertainment that I've consumed as well 
          as the rating I gave it. The frontend then searches the database
          as well as adds to it.`,
        img: "./assets/entertainmentopedia.png",
        link: "https://omars-entertainmentopedia.yahia.space",
       },
    ]
  const handleClick = (way)=>{
    way === "left" 
      ? setCurrentSlide(currentSlide > 0 ? currentSlide-1: 2) 
      : setCurrentSlide(currentSlide<data.length -1 ?currentSlide+1 : 0);
  }
  return (
    <div className="works" id="works">
        <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
          {data.map(d=>(
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
