import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {

  componentDidMount() {
    this.props.fbLogin();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.navigation.navigate('map')
    }
  }

  render() {
    return (
      <View>
        <Text>Auth Screen</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { token: auth.token }
};

export default connect(mapStateToProps, actions)(AuthScreen);
