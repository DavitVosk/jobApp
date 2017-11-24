import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import Slides from '../components/Slides';
import { connect } from 'react-redux';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#326342' },
  { text: 'Find your dream job here', color: '#03A9f4' },
  { text: 'Set your location, then swipe away', color: '#326342' }
];

class WelcomeScreen extends Component {
  componentWillMount() {
    if (this.props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return (
      <Slides
        data={SLIDE_DATA}
        onLastSliderButtonPress={() => this.props.navigation.navigate('auth')}
      />
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { token: auth.token }
};

export default connect(mapStateToProps)(WelcomeScreen);
