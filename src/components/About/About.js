import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './AboutCSS.css'
import myImage from './1.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class='aboutPage-container'>
          <div class='aboutPage-text'>
            <img class='my-image' src={myImage} alt="My Picture" />
            <h2>
            I am Mariam Darawshy.
            </h2>
            <h2>
            I am 20 years old, studying Software Engineering at Ariel University, and I am currently in my final year.
        
                 </h2>
                 <h2>
                 The founder of this website, Movies World.
                 </h2>
                 <h2>
                 Welcome!
                 </h2>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
