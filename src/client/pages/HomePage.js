import React, { Component } from "react";
import { Helmet } from "react-helmet";

class HomePage extends Component {
  head() {
    return (
      <Helmet>
        <title>React Server-Side Rendering</title>
        <meta property="og:title" content="React SSR" />
      </Helmet>
    );
  }

  render() {
    return (
      <div className=".container">
        {this.head()}
        <div className="mx-auto" style={{ maxWidth: "52rem" }}>
          <img
            src="https://i.imgur.com/1aHMhG7.png"
            className="img-fluid img-thumbnail mt-3"
            alt="Responsive image"
          ></img>
          <h3 className="text-center text-monospace mt-2">
            A QUICK INSIGHT ON WHAT THE PAGE IS POWERED BY
          </h3>
          <hr />
          <p className="mb-3">
            We are using <b>NodeJS</b> and <b>Express</b> for our server side
            computation, <b>React</b> is used on both the server and client by
            getting help from <b>Webpack</b> & <b>Babel</b>. This is paired with{" "}
            <b>Redux</b> and <b>Redux Thunk</b> for efficient state management
            and <b>React Router</b> for navigation. We have the same code
            running on the server and on the client to get us the best velocity.
            This is all paired with <b>CSS</b>, <b>HTML</b> and <b>Bootstrap</b>{" "}
            for the best customer experience. The first request is served by our
            Node server, serving plain HTML{" "}
            <b>
              <i>[turn off JavaScript and load the page to test].</i>
            </b>{" "}
            Afterwards the rehydration by React on the client side kicks in to
            give us a Singe Page Application experience.
          </p>
        </div>
      </div>
    );
  }
}

//exporting the component and the loadData function (if present)
//in the form of an object(key:value pair)
// to avoid naming conflicts of different loadData function imports in Routes

export default {
  component: HomePage,
};
