import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Slides from '../components/reusable/Slides';

const SLIDE_DATA = [
  {text: 'Welcome to JobApp', color: '#326342' },
  {text: 'Find your dream job here', color: '#33E9FF' },
  {text: 'Set your location, then swipe away', color: '#03A9f4'}
];

class WelcomeScreen extends Component {

  render() {
    return (
      <Slides data={SLIDE_DATA} />
    );
  }
}

const styles = {
  container: {}
};

export default WelcomeScreen;
