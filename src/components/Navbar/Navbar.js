import React, { Component } from 'react'
import './NavbarCSS.css'
// import '../dist/css/bootstrap.rtl.css.map'

export default class Navbar extends Component {
  render() {
    return (
        <div>
            <nav>
                <h1 class="logo"><a href="/">Movies World</a></h1>
                <ul class="navbar-menu">
                    <li class="nav-link"><a href="/">Home</a></li>
                    <li class="nav-link"><a href="/about">About</a></li>
                    <li class="nav-link"><a href="/movies">Movies</a></li>
                    <li class="nav-link"><a href="/addmovie">AddMovie</a></li>
                </ul>
            </nav>
        </div>
    )
  }
}
