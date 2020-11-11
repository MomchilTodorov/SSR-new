import React, { Component } from "react";
import { Helmet } from "react-helmet";

/*internally the static router renames this prop from context to staticContext */
class NotFoundPage extends Component {
  //;  = ({ staticContext = {} }) =>

  head() {
    return (
      <Helmet>
        <title>Page Not Found</title>
        <meta property="og:title" content="React SSR" />
      </Helmet>
    );
  }

  render() {
    if (this.props.staticContext) {
      this.props.staticContext.notFound = true;
    }
    return (
      <div className="container mx-auto" style={{ maxWidth: "30em" }}>
        {this.head()}
        <p className="text-center p-3 font-weight-light mt-5 bg-dark text-white rounded">
          This Page Isn't Available
        </p>
        <p className="text-center font-weight-normal">
          The link may be broken, or the page may have been removed. Check to
          see if the link you're trying to open is correct.
        </p>
      </div>
    );
  }
}

export default {
  component: NotFoundPage,
};
