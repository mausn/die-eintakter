import React, { Component } from "react";
import "./MainPage.css";
import { UncontrolledCarousel } from "reactstrap";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          src:
            "https://regionalbraunschweig.de/wp-content/uploads/2018/06/24-10ersieger1992-rk.jpg",
          altText: "Slide 1",
          caption: "Slide 1",
          header: "Slide 1 Header"
        },
        {
          src:
            "https://regionalbraunschweig.de/wp-content/uploads/2018/06/24-10ersieger1992-rk.jpg",
          altText: "Slide 2",
          caption: "Slide 2",
          header: "Slide 2 Header"
        }
      ]
    };
  }

  render() {
    return (
      <div className="mainPage" key="container">
        <div key="header">
          <h1 className="header">Die Eintakter</h1>
        </div>
        <div key="content">
          <UncontrolledCarousel items={this.state.items} />
          <p class="btn btn-primary">
            This is the description of "Die Eintakter"
          </p>
        </div>
        <div key="footer">(c) Copyright - Die Eintakter</div>
      </div>
    );
  }
}

export default MainPage;
