import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Slides from '../components/reusable/Slides';

const SLIDE_DATA = [
  {text: 'Welcome to JobApp', color: '#326342' },
  {text: 'Find your dream job here', color: '#03A9f4' },
  {text: 'Set your location, then swipe away', color: '#326342'}
];

class WelcomeScreen extends Component {

  render() {
    return (
      <Slides
        data={SLIDE_DATA}
        onLastSliderButtonPress={() => this.props.navigation.navigate('auth')}
      />
    );
  }
}

const styles = {
  container: {}
};

export default WelcomeScreen;
