import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { featuredPortfolio, aiPortfolio, frontendPortfolio, backendPortfolio, mobilePortfolio, worksData } from "../../data"

export default function Portfolio({currentSlide, setCurrentSlide}) {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState(new Set([]))
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "ai",
      title: "AI",
    },
    {
      id: "frontend",
      title: "Frontend",
    },
    {
      id: "backend",
      title: "Backend",
    },
    {
      id: "mobile",
      title: "Mobile"
    }
  ]

  useEffect(()=>{

    switch(selected){
      case "featured": 
        setData(featuredPortfolio);
        break;
      case "ai": 
        setData(aiPortfolio);
        break;
      case "frontend": 
        setData(frontendPortfolio);
        break;
      case "backend": 
        setData(backendPortfolio);
        break;
      case "mobile": 
        setData(mobilePortfolio);
        break;
      default: 
        setData(featuredPortfolio);
        break;
    }

  },[selected])

  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map(item=>(
            <PortfolioList 
              title={item.title} 
              active={selected === item.id} 
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {worksData.map((d)=>(data.has(parseInt(d.id, 10)) &&
            <a href="#works" onClick={()=>setCurrentSlide(d.id)}>
              <div className="item">
                  <img src={d.img} alt="" />
                  <h3>{d.title}</h3>
              </div>
            </a>
          ))}
        </div>
    </div>
  )
}
