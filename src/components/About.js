import React from "react";
import Navbar from "./Navbar";
import "./About.css"; // Create this CSS file for styling

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about">
      <h1>About!!</h1>
      <div className="about-info">
      <p className="para-info">
        <strong>Whether?</strong> is your go-to solution for real-time weather updates. <br/>        This app is designed to provide you with accurate and detailed weather information for any city in the world.
      </p>
 
      <h2>Features</h2>
      <ul>
        <li>Get current weather conditions for any city.</li>
        <li>Real-time updates on temperature, humidity, and wind speed.</li>
        <li>Dynamic background changes based on weather conditions.</li>
        <li>Clean and intuitive user interface for seamless navigation.</li>
      </ul>

      <h2>How It Works</h2>
      <p>
        The app uses the <strong>OpenWeatherMap API</strong> to fetch real-time weather data. Simply 
        enter the name of your desired city in the search bar, and the app will provide you with the latest weather updates, 
        including temperature, humidity, and wind speed.
      </p>

      <h2>Use Cases</h2>
      <ul>
        <li>Planning outdoor activities based on weather conditions.</li>
        <li>Checking real-time weather updates for travel destinations.</li>
        <li>Staying informed about sudden weather changes in your area.</li>
      </ul>

      <h2>About the Developer</h2>
      <p className="about-dev">
        This App was created as a Assignment-2 for our GDG(Google Developer Group). <br/>
        Using React framework and OpenWeatherMap API by our Group Modak Enthusiast!!
      </p>
      </div>
    </div>
    </>
  );
};

export default About;
