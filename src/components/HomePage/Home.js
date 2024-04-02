import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Background from "../Background/Background";
import './HomeCSS.css'

function Home() {
  return (
    <div>
      <Navbar />
      <Background />
      <h2>This Website Was Made By Mariam Darawshy
        
      </h2>
      <h2>This is my new website called "Movies World".

You can find all the movies you want here!</h2>

<h2>Hope you like it.
Enjoy watching My friends!</h2>
      
      <Footer />
    </div>
  );
}

export default Home;
