import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

export default class Poetry extends Component {
  render() {
    return (
      <div className="Container">
        <Navbar />
        <Logo />
        <div className="CardContainer">
          <div className="Cards">
            <h1>Sonnet</h1>
            <h3>February 2, 2017</h3>
            <img src="" alt="poemimage" />
            <p>
              The azaleas are fading, their petals like shabby dresses, yellow
              hand-me-downs. A magpie sways at the tip of the highest fir, and I
              think: when you fly, you can risk the fall. Clematis hangs on the
              washing line, white stars in a green sky. A kite skims silver
              birches;...
            </p>
            <button>READ MORE...</button>
            <h1>Black Babies</h1>
            <h3>December 19, 2016</h3>
            <img src="" alt="poemimage" />
            <p>
              When I was seven we saved pennies for the babies. You could choose
              from the book which one was yours. On the classroom wall was the
              chart with our names, and stickers for the pennies we had brought
              from home. My progress was slow. The shame of the child with the
              home-...
            </p>
            <button>READ MORE...</button>
            <h1>Foxhill</h1>
            <h3>March 31, 2016</h3>
            <img src="" alt="poemimage" />
            <p>
              God is painting today – above the trees, above the sun – busy with
              brushwork: splashes of ash and smudge-smeared ink. There are no
              rain clouds, just brush strokes, moving. Charcoal merges with
              silver and smoke. Our Maker’s marks of whale-grey and ocean-pearl
              swirl and...
            </p>
            <button>READ MORE...</button>
          </div>
          <div className="PoetrySidebar">
            <div>
              <h2>Get All New Writings Sent Straight to Your Inbox</h2>
              <input type="text" />
              <button>Subscribe Now</button>
            </div>
            <div>
              <h2>Recent Posts</h2>
              <p>Sonnet</p>
              <p>February 2, 2017</p>
            </div>
            <div>
              <h2>Archive</h2>
              <h3>February 2017 (1)</h3>
              <h3>December 2016 (1)</h3>
              <h3>March 2016 (1)</h3>
            </div>
            <div>
              <h2>Search By Tags</h2>
              <p>Childhood Nature Spirituality</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
