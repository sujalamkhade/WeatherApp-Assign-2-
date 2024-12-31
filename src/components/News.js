import "./News.css"; // Create this CSS file for styling
import Navbar from './Navbar'
const News = () => {
  return (
    <>
    <Navbar/>
    <div className="news">
      <h1>Weather News <span>incomplete</span></h1>
      <p>Stay updated with the latest weather news and alerts from around the globe.</p>
      <div className="news-headlines" >
      <ul>
        <li>Teeth chattering cold at Mumbai,temperature reaches 21°C</li>
        <li>Water blockage at Vatican City</li>
        <li>Paus padnar aahe vatta!!</li>
      </ul>
      </div>
    </div>
    </>
  );
};

export default News;
