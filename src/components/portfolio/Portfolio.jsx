import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          <li className="active">Featured</li>
          <li>Coding Experience</li>
          <li>School Experience</li>
          <li>Cyber Experience</li>
          <li>Featured</li>
          <li>Featured</li>
        </ul>
        <div className="container">
          <div className="item">
            <img src="assets/cpp logo.png" alt="" />
            <h3>Program App</h3>
          </div>
          <div className="item">
            <img src="assets/cpp logo.png" alt="" />
            <h3>Program App</h3>
          </div>
          <div className="item">
            <img src="assets/cpp logo.png" alt="" />
            <h3>Program App</h3>
          </div>
          <div className="item">
            <img src="assets/cpp logo.png" alt="" />
            <h3>Program App</h3>
          </div>
          <div className="item">
            <img src="assets/cpp logo.png" alt="" />
            <h3>Program App</h3>
          </div>
          <div className="item">
            <img src="assets/cpp logo.png" alt="" />
            <h3>Program App</h3>
          </div> 
        </div>
    </div>
  )
}
