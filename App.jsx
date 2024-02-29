import CardItem from "./components/CardItem/index.jsx";
import "./App.css";

const CardDetails = [
  {
    job: "Data Scienctist",
    description:
      "Data scientist is a professional who uses data to extract knowledge and insights from large data sets.",
    imgUrl: "https://i.ibb.co/P9KWpcS/data-science-icon.png",
  },
  {
    job: "IoT Devloper",
    description:
      "Designs and develops applications for the Internet of Things, enabling devices to communicate and exchange data",
    imgUrl: "https://i.ibb.co/G59ZNbh/iot.png",
  },
  {
    job: "VR Devloper",
    description:
      "Creates immersive virtual reality experiences through the development of software and applications.",
    imgUrl: "https://i.ibb.co/yFTzXTZ/virtual-reality.png",
  },
  {
    job: "ML Engineer",
    description:
      "Utilizes machine learning algorithms and data to build models and systems that can learn from and make predictions or decisions",
    imgUrl: "https://i.ibb.co/PtQB96g/worker.png",
  },
];

const App = () => (
  <div className="main-container">
    <h1 className="head">Learn 4.0 Technologies</h1>
    <p className="para">
      Get trained by alumni of IITs and top companies like Amazon, Microsoft,
      Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved
      in Product Development
    </p>
    <ul className="cards-container">
      {CardDetails.map((eachItem) => (
        <CardItem cardInfo={eachItem}/>
      ))}
    </ul>
  </div>
);

export default App;
