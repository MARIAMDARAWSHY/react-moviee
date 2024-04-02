import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


export default class NotFound extends Component {
  render() {
    return (
    <div>
      <Navbar /> 
      <div className='aboutPage-container'>
        <div className='aboutPage-text'>
        </div>
      </div>
      <h2>404! not found</h2>
      <Footer />
    </div>
    )
  }
}
