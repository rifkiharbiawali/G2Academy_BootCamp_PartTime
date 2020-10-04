import React, {Component} from 'react';
import {Button} from 'react-native';

class Tombol extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Button title={this.props.isi} onPress={this.props.press} />
      </>
    );
  }
}

export default Tombol;
