import React, { Component } from "react";

class Entry extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="entry-container">
        <div className="entry-date">
          May 13th, 2010
        </div>
        <div className="entry-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="entry-body">
          It's just a matter of time. I keep saying it. It needs to happen and it will happen. It will address our issues with giving all of our data to any one big company, with capacity, with privacy, with reliability. Of course, for this to happen complex network infrastructure needs to be open sourced and some things need to be invented. But luckily, the software is what's most important. For us to get there, there need to be major market forces and other incentives at play. One such force is the backlash over privacy we're seeing -- and we'll continue to see a lot more until efforts start being channeled towards open source, decentralized and distributed alternatives. Eventually, they'll be just as good as centrally served experiences, and eventually they'll be better and the current client-server model will be but a memory.
          <br/><br/>
          P2P describes how some of that messy network stuff can work. The idea is that the network is the computer. Everything -- all the code and data -- that makes up our experience is distributed over the countless nodes that are yours and my and everyone's computers. The processing of all that stuff is handled by the commodity processors in all the nodes (our computers, kiosks, anything sufficiently internet connected). There may be companies and governments that offer supernodes which help bring more resources to the grid. All of this stuff is encrypted and distributed and your stuff is only accessible by you.
        </div>
      </div>
    );
  }
}

export default Entry;