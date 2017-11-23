import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class DeckScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
      </View>
    );
  }
}

const styles = {
  container: {}
};

const mapStateToProps = ({ jobs }) => {
  return { jobs }
};

export default connect(mapStateToProps)(DeckScreen);
