import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderSlides() {
    return this.props.data.map(slide => {
      return (
        <View
          key={slide.text}
          style={[styles.sliderView, { backgroundColor: slide.color }]}
        >
          <Text style={styles.sliderText}>{slide.text}</Text>
        </View>
      )
    })
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  sliderView: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',

  },
  sliderText: {
    fontSize: 30,
    color: 'white'
  }
};

export default Slides;


