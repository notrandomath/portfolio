import "./testimonials.scss"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Person One",
      title: "Title One",
      img: "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_960_720.png",
      icon: "https://cdn.pixabay.com/photo/2015/12/03/01/27/play-1073616_960_720.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta maxime in sapiente ut dolore consectetur atque dolorum.",
    },
    {
      id: 2,
      name: "Person Two",
      title: "Title Two",
      img: "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_960_720.png",
      icon: "https://cdn.pixabay.com/photo/2015/12/03/01/27/play-1073616_960_720.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta maxime in sapiente ut dolore consectetur atque dolorum.",
      featured: true,
    },
    {
      id: 3,
      name: "Person Three",
      title: "Title Three",
      img: "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_960_720.png",
      icon: "https://cdn.pixabay.com/photo/2015/12/03/01/27/play-1073616_960_720.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta maxime in sapiente ut dolore consectetur atque dolorum.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d=>(
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/left arrow.png" className="left" alt="" />
              <img src={d.img} className="user" alt="" />
              <img src={d.icon} className="right " alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
