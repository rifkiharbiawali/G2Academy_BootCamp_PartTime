import React, { Component } from "react";
import ManuUtama from "./Header/MenuUtama";
import Box from "./Content/Box";
import Footer from "./Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <ManuUtama />
        </div>
        <div>
          <Box />
        </div>
        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
