import React, { Component } from "react";
import './home.css'


class Home extends Component {
  render() {
    return (
      <div>
        

        <header class="main-head">
          <nav>
            <h1 id="logo">On The Come Up</h1>
            <ul>
              <li>
                <a href="#locations">Locations</a>
              </li>
              <li>
                <a href="#benefits">Benefits</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <section class="hero">

    
<h2>See Whats new</h2>
<h3>See what movies are out there</h3>
<button>Look Now!</button>
</section>

<section>
        <section id="locations">
            <header class="location-head">
                <h2>The Perfect Travelling Expereince.</h2>
                <h3>We cover everything from picking the perfect hotel, flight,<br />
                    and travel destination.<br /></h3>
            </header>
            <img src="/img/cloud.png" class="moving-cloud-1 cloud"></img>
            <img src="/img/cloud.png" class="moving-cloud-2 cloud"></img>

        </section>

    </section>
        
      </div>
    );
  }
}

export default Home;
