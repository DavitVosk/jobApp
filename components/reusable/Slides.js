import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';


const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSliderButton(index){
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title='I am ready'
          onPress={this.props.onLastSliderButtonPress}
        />
      )
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={index}
          style={[styles.sliderView, { backgroundColor: slide.color }]}
        >
          <Text style={styles.sliderText}>{slide.text}</Text>

          {this.renderLastSliderButton(index)}
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


