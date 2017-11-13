import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {

  componentDidMount() {
    this.props.fbLogin();
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text>Auth Screen</Text>
      </View>
    );
  }
}

const styles = {
  container: {}
};

export default connect(null, actions)(AuthScreen);
